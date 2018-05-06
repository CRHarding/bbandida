const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cred = require('../config/emailConfig');

let transport = {
	host: 'smtp.mail.yahoo.com',
	port: 465,
	auth: {
		user: cred.USER,
		pass: cred.PASS
	}
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
	if (error) {
		console.log('not ready to take messages', error)
	} else {
		console.log('server is ready to take messages')
	}
})

router.post('/', (req, res) => {
	let name = req.body.name
	let email = req.body.email
	let message = req.body.message
	let content = `name: ${name} \n email: ${email} \n message: ${message}`

	let mail = {
		from: cred.USER,
		to: cred.USER,
		subject: 'New Message from contact form',
		text: content
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			console.log('failed to send', err)
			res.json({
				msg: 'fail'
			})
		} else {
			res.json({
				msg: 'success'
			})
		}
	})
})

module.exports = router;