const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config().parsed;

const DB = "mongodb+srv://selvasiva:SqpgciEBXkL3FM3H@cluster0.zphx6l8.mongodb.net/reset-password"
mongoose.set('strictQuery', false);

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})