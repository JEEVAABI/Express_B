const express = require('express')
const userRouter = express.Router()

const listOfServices = [
    {
        'id' : 1,
        'service' : 'app development'
    },
    {
        'id' : 2,
        'service' : 'web development'
    },
    {
        'id' : 3,
        'service' : 'full stack'
    },
    {
        'id' : 4,
        'service' : 'backend devlopment'
    },
    {
        'id' : 5,
        'service' : 'front end development'
    }
]
userRouter.get('/',(request,response)=>{
    response.send('this is user page')
})

userRouter.get('/:id([0-9]{1})',(request,response)=>{
    const pageId = Number(request.params.id)
    //console.log(id)
    const userId = listOfServices 
        .find((user)=>
        user.id === pageId
    )
    if(!userId){
        response.send('page not found')
    }
    else{
        response.json(userId.service)
    }

    response.send(`this is list of user ${request.params.id}`)
})




module.exports = userRouter