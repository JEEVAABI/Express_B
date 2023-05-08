const express = require('express')
const userRouter = express.Router()

const listOfServices = [
    {
        
        'service' : 'app development'
    },
    {
        
        'service' : 'web development'
    },
    {
        
        'service' : 'full stack'
    },
    {
        
        'service' : 'backend devlopment'
    },
    {
        
        'service' : 'front end development'
    }
]
userRouter.get('/',(request,response)=>{
    response.send('this is user page')
})

userRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user)
    
})
userRouter.param('id',(request,response,next,id)=>{
    request.user = listOfServices[id-1]
    next()

})



module.exports = userRouter