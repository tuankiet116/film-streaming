const nodemailer = require('nodemailer')
const dotenv = required('dotenv')
dotenv.config()

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER_NAME, // generated ethereal user
    pass: process.env.MAIL_PASSWORD, // generated ethereal password
  }
});