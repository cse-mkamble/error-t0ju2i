require("dotenv").config();
const nodemailer = require('nodemailer');

const sendEmail = (options) => {

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'cse.mkamble@gmail.com',
            pass: 'Mayur#2000',
        }
    });

    const mailOptions = {
        from: process.env.APP_NAME + ' <cse.mkamble@gmail.com>',
        to: options.to,
        subject: options.subject,
        html: options.text,
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

module.exports = sendEmail;