const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const SENDER_EMAIL_ADDRESS = 'cse.mkamble@gmail.com';
const MAILING_SERVICE_CLIENT_ID = '798003545648-sd4asfja34bs1jsionjgoju776lki3pk.apps.googleusercontent.com'
const MAILING_SERVICE_CLIENT_SECRET = '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'
const MAILING_SERVICE_REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const MAILING_SERVICE_REFRESH_TOKEN = '1//04HAOYIOywPUTCgYIARAAGAQSNwF-L9IrDSibeA78Wj6ljMmKQjw2i9f5EHjihUUPIfpekCvpStgNArekgNNeRM6qXQse_N9XQpE'
const MAILING_SERVICE_ACCESS_TOKEN = 'ya29.a0ARrdaM-JsYnUwr_tRISLnoR8OelKYwTEDFgQBXzhYhK1-exSFHNXBBYpcNEUIh79g78-Fa3LYsPg67CkrsdCCzI3GLwz5HOgyPc__aFqhlb9wz4Ru9Amh9H0k1gAoo1EXk4JOSC28Hnn-h_sZ62AM-ijKvZA'

const oAuth2Client = new google.auth.OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: MAILING_SERVICE_REFRESH_TOKEN })

async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'cse.mkamble@gmail.com',
                clientId: MAILING_SERVICE_CLIENT_ID,
                clientSecret: MAILING_SERVICE_CLIENT_SECRET,
                refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
                accessToken: MAILING_SERVICE_ACCESS_TOKEN
            }
        });

        const mailOptions = {
            from: 'Mayur <cse.mkamble@gmail.com>',
            to: 'mmkamble2000@gmail.com',
            subject: 'Test Mail',
            text: 'hello from mail',
            html: '<h1>hello</h1>'
        }

        await transporter.sendMail(mailOptions, function (err, info) {
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

sendMail();

/**
 *
 * https://developers.google.com/oauthplayground
 *
 * Your Client ID
 * 798003545648-sd4asfja34bs1jsionjgoju776lki3pk.apps.googleusercontent.com
 *
 * Your Client Secret
 * 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
 *
 * https://mail.google.com
 *
 * Authorization code:
 * 4/0AX4XfWg4LCCkkXRJUaNxCR6i7k-aTm1SlyWL5BBi3O9FTK-SSlRILBERfwROKgYS0dLDUw
 *
 * Refresh token:
 * 1//04HAOYIOywPUTCgYIARAAGAQSNwF-L9IrDSibeA78Wj6ljMmKQjw2i9f5EHjihUUPIfpekCvpStgNArekgNNeRM6qXQse_N9XQpE
 *
 * Access token:
 * ya29.a0ARrdaM-JsYnUwr_tRISLnoR8OelKYwTEDFgQBXzhYhK1-exSFHNXBBYpcNEUIh79g78-Fa3LYsPg67CkrsdCCzI3GLwz5HOgyPc__aFqhlb9wz4Ru9Amh9H0k1gAoo1EXk4JOSC28Hnn-h_sZ62AM-ijKvZA
 *
 *
 */
