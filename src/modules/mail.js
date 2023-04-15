import nodemailer from 'nodemailer'
import config from '../config/config.js'

export default class Mail {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: config.userMail,
                pass: config.userPass
            }
        })   
    }

    send = async(user, subject, html) => {
        const result = await this.transport.sendMail({
            from: config.userMail,
            to: user.email,
            subject,
            html
        })

        console.log(result)
        return result
    }
}