import * as nodemailer from 'nodemailer';

export const sendEmail = async (recipient: string, url: string) => {
	let a = recipient;
	console.log(a);

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: process.env.NODEMAILER_EMAIL,
			pass: process.env.NODEMAILER_PASSWORD,
		},
	});

	const message = {
		from: 'Sender Name <sender@example.com>',
		to: `avseenkov_a@mail.ru`,
		subject: 'Nodemailer is unicode friendly ✔',
		text: 'Hello to myself!',
		html: `<html>
        <body>
        <p>Testing SparkPost - the world's most awesomest email service!</p>
        <a href="${url}">confirm email</a>
        </body>
        </html>`,
	};

	let info = await transporter.sendMail(message);

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou..
};
