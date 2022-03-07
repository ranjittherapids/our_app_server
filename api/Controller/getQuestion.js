const GetQuestionSchema =require('../Modal/getQuestion')
//create question
  const CreateQuestion=async(req,res)=>{
try {
  const {name,email,subject,message}=req.body
 
    const question=new GetQuestionSchema(req.body)
    question.save()
    .then(response=>{
      res.status(200).json({data:response,msg:'sucessfully save CreateQuestion data'})
     
    } )
    .catch(err=> res.status(400).json({data:err, msg:'problem with getquestion data in db '})) 
}
catch(err){ return res.status(400).send({data:err,msg:"something error occurs during CreateQuestion function called"})}
}
//get_all_question
const GetAllQuestion=async(req,res)=>{
  try {
     GetQuestionSchema.find()
     .then(response=>res.status(200).json({response,msg:'sucessfully get allQuestion'}))
     .catch(err=>console.log(err,'can`t find any question'))
 
  }  
  catch(err){ return res.status(400).send({data:err,msg:"something error occurs during getAllQuestion function called"})}
}
//delete_all_empty_question
const DeleteAllEmptyQuestion=async(req,res)=>{
  try {
    GetQuestionSchema.find()
    .then(response=> {
     var id=""
      response.map(data=>{
        if(data.name==""&& data.subject==""&& data.email==""&& data.message=="")
      GetQuestionSchema.deleteOne({_id:data,_id})
      .then(response=>res.status(200).json({data:response,msg:'sucessfully get DeleteAllEmptyQuestion'}))
      .catch(err=>console.log(err,'can`t  delete DeleteAllEmptyQuestion'))
      })
  
    })
    .catch(err=>console.log(err,'can`t find any question'))
    
 
  }  
  catch(err){ return res.status(400).send({data:err,msg:"something error occurs during DeleteAllEmptyQuestion function called"})}
}
module.exports={CreateQuestion,GetAllQuestion,DeleteAllEmptyQuestion}