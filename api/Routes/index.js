const router =require("express").Router()
const getQuestion =require('./getQuestion')
// const crud =require('./crud.js')
// const chat =require('./chat.js')
// const image =require('./imgupload')
// const socket =require('./Socket.js')
 router.use('/question',getQuestion)
// router.use('/chat',chat)
// router.use('/image',image)
// router.use('/socket',socket)
router.get('/',(req,res)=>res.send("backend working fine"))
module.exports = router