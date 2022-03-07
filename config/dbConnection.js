const  mongoose = require("mongoose")
const connectDB = (DB_CONNECTION_URL) => {
  console.log("DB trying to connect on " + new Date());

  const options = {
    keepAlive: 1,
    // autoReconnect: true,
  //  poolSize: 10,
   useNewUrlParser: true,
     useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, options);
};
module.exports= connectDB;
