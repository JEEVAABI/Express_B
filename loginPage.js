const express = require('express')
const userRouter = express.Router()
userRouter.get('/',(request,response) =>{
    response.send("This is login page")
})
module.exports = userRouter