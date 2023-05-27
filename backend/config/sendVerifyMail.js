//for send mail
import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
const sendVerifyMail = async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: "ayussh222dongol@gmail.com",
        pass: "ezbfrrscmkfffqyy",
      },
    });

    const mailOptions = {
      from: "ayussh222dongol@gmail.com",
      to: email,
      subject: "For Verification mail",
      html:
        "<p>Hii " +
        name +
        ', please click here to <a href = "http://localhost:5000/api/user/verify?id=' +
        user_id +
        '">Verify</a> your mail. </p>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been send", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendVerifyMail;
