require("dotenv").config();
const nodemailer = require('nodemailer');
const mailMessage = require('./MailMessage/mailMessage');

async function sendMail(options) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'cse.mkamble@gmail.com',
                pass: 'Ballarpur#2000',
            }
        });

        await transporter.sendMail({
            from: process.env.APP_NAME + '<cse.mkamble@gmail.com>',
            to: options.to,
            subject: options.subject,
            html: mailMessage(options.text)
        }, function (err, info) {
            if (err) {
                console.log('err', err);
            } else {
                console.log('info', info);
            }
        })
    } catch (error) {
        return error;
    }
}

module.exports = sendMail;