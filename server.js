const app =require('./config/express');
const { PORT,DB_CONNECTION_URL} = require('./config/dotEnv');
const connectDB=require('./config/dbConnection')
const http = require('http');
const server = http.createServer(app);

connectDB(DB_CONNECTION_URL)
.then((connect)=>{
    console.log(`dataBase Connect suessfully`)})
.catch(err=>console.log(`err occurs during database connection :-${err}`))
server.listen(PORT,()=>console.log(`server runnng on the ${PORT}`))