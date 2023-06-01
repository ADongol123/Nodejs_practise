//for send mail
import readline from "readline";
import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import UserOTPVerification from "../model/UserOTPVerification.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

// Generate a random verification number
function generateVerificationNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}
// const sendVerifyMail = async (name, email, user_id) => {
//   try {

//     const mailOptions = {
//       from: "ayussh222dongol@gmail.com",
//       to: email,
//       subject: "For Verification mail",
//       // html:
//       //   "<p>Hii " +
//       //   name +
//       //   ', please click here to <a href = "http://localhost:5000/api/user/verify?id=' +
//       //   user_id +
//       //   '">Verify</a> your mail. </p>',
//       text: `Your verification number is: ${verificationNumber}`

//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email has been send", info.response);
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const sendVerifyMail = async (_id, email, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 90000)}`;
    const mailOptions = {
      from: "ayussh222dongol@gmail.com",
      to: email,
      subject: "For Verification mail",
      html: `<p>Enter <b>${otp}</b> in the app to verify your email address and complete the </p> <p>This code <b>expires in 1 hour</b></p>`,
    };

    const newOTPVerification = new UserOTPVerification({
      userId: _id,
      otp: otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    //save otp record in database
    await newOTPVerification.save();
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been send", info.response);
      }
    });
    res.status(200).json({
      status: "PENDING",
      message: " Verificaiton otp email sent",
      data: {
        userId: _id,
        email,
      },
    });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};

export const sendForgetPassword = async (name, email, token) => {
  try {
    const mailOptions = {
      from: "ayussh222dongol@gmail.com",
      to: email,
      subject: "For Reset Password",
      html:
        "<p>Hii " +
        name +
        ', Please click the link <a href="http://localhost:3000/pages/forget-password?token=' +
        token +
        '">Click me</a> to reset the password </p>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been send", info.response);
      }
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
