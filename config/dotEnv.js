const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
    console.log(`error occurs during dotenv connection ${result.error}`)
}
module.exports = {
//   endpoint: process.env.API_URL,
//   masterKey: process.env.API_KEY,
DB_CONNECTION_URL:process.env.DB_CONNECTION_URL,
  PORT: process.env.PORT
};