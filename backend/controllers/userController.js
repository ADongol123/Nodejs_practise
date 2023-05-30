import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../config/generateToken.js";
import cloudinary from "../utils/cloudary.js";
import sendVerifyMail from "../config/sendVerifyMail.js";
import UserOTPVerification from "../model/UserOTPVerification.js";

// export const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password, pic, verified } = req.body;
//   // console.log(req.body);
//   if (!name || !email || !password) {
//     res.status(400);
//     throw new Error("Please Enter all the Fields");
//   }

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     throw new Error("User already exists");
//   }
//   try {
//     const user = new User({
//       name,
//       email,
//       password,
//       pic,
//       verified,
//     });
//     console.log(user);
//     if (user) {
//       if (pic) {
//         const uploadRes = await cloudinary.uploader.upload(user.pic, {
//           upload_preset: "bookShop",
//         });
//         console.log(pic, "user");
//         await user.save().then((results) => {
//           sendVerifyMail({ results }, res);
//         });
//         // res.status(201).send(savedUser);
//         // res.status(201).json({
//         //   _id: user._id,
//         //   name: user.name,
//         //   email: user.email,
//         //   pic: uploadRes.url,
//         //   verified: user.verified,
//         //   token: generateToken(user._id),
//         // });
//         // sendVerifyMail(user.name, user.email, user._id);
//       }
//     } else {
//       throw new Error("Failed to create user");
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, verified } = req.body.formData;

  if (!name || !email || !password) {
    res.status(400).json({
      status: "FAILED",
      message: "Please enter all the fields",
    });
    return;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({
      status: "FAILED",
      message: "User already exists",
    });
    return;
  }

  try {
    const user = new User({
      name,
      email,
      password,
      pic,
      verified,
    });

    if (pic) {
      const uploadRes = await cloudinary.uploader.upload(user.pic, {
        upload_preset: "bookShop",
      });

      user.pic = uploadRes.url;
    }

    await user.save();

    sendVerifyMail(user._id, user.email, res);
  } catch (error) {
    res.status(500).json({ status: "FAILED", error: error.message });
  }
});
export const verifyMail = async (req, res) => {
  // try {
  //   const updatedInfo = await User.updateOne(
  //     { _id: req.query.id },
  //     { $set: { verified: true } }
  //   );
  //   console.log(updatedInfo);
  //   res.render("email-verified");
  // } catch (error) {
  //   console.log(error.message);
  // }
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      throw Error("Empty otp details are not allowed");
    } else {
      const UserOTPVerificationRecords = await UserOTPVerification.find({
        userId,
      });
      if (UserOTPVerificationRecords.length <= 0) {
        throw new Error(
          "Accounts records dosen't exist or has been verified already. Please sign up or login"
        );
      } else {
        const { expiresAt } = UserOTPVerificationRecords[0];
        const checkotp = UserOTPVerificationRecords[0].otp;
        if (expiresAt < Date.now()) {
          UserOTPVerification.deleteMany({ userId });
          throw new Error("Code has expired. Please request again. ");
        } else {
          if (!otp) {
            throw new Error("Invalid code passed. Check your inbox");
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await UserOTPVerification.deleteMany({ userId });
            res.json({
              status: "VERIFIED",
              message: `User email verified successfully`,
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({
      status: "Failed",
      message: error.message,
    });
  }
};
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user.verified === true) {
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        verified: user.verified,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid Email Password");
    }
  } else {
    res.status(400);
    throw new Error("Please verify the email to login");
  }
});

export const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          // regex operation fetches the data based on the query provided by the user
          { name: { $regex: req.query.search, $options: "i" } }, //i is case insensitive
          { email: { $regex: req.query.search, $options: "i" } }, //i is case insensitive
        ],
      }
    : {};

  const users = (await User.find(keyword)).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
