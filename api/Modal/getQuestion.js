const  mongoose = require("mongoose")
const GetQuestionSchema= new mongoose.Schema({
    name:{
        type:String,
      required: [true, '  name required']
    },
    email:{
        type:String,
      required: [true, 'email required']
    },
    subject:{
        type:String,
      required: [true, 'subject required']
    },
    message:{
        type:String,
      required: [true, 'message required']
    },
})
module.exports=mongoose.model('GetQuestionSchema',GetQuestionSchema)