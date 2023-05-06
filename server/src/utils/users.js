require("dotenv").config();
const {PASSWORD} = process.env
const users = [{ email: "mariarosafuhr@gmail.com", password: PASSWORD }];
module.exports = users;