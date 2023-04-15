import dotenv from "dotenv"

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE || 'FILE',
    mongoURI: process.env.MONGO_URI,
    mongoDBname: process.env.MONGO_DB_NAME,
    port: process.env.PORT || 8080,
    userMail: process.env.USER_MAIL,
    userPass: process.env.USER_PASS,
}