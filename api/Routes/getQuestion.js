const router =require ("express").Router()
 const {CreateQuestion,GetAllQuestion,DeleteAllEmptyQuestion} =require('../Controller/getQuestion')
 router.post('/create_question',CreateQuestion) //for create user
 router.get('/get_all_question',GetAllQuestion) 
 router.delete('/delete_all_empty_question',DeleteAllEmptyQuestion) 
module.exports = router
