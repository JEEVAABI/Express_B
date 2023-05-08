const express = require('express')
const userRouter = express.Router()

const listOfServices = [
    {
        'id' : 1,
        'name' : 'jeeva'
    },
    {
        'id' : 2,
        'name' : 'aaakash'
    },
    {
        'id' : 3,
        'name' : 'adsdsdh'
    },
    {
        'id' : 4,
        'name' : 'sdsfsfsh'
    },
    {
        'id' : 5,
        'name' : 'sdafgadfgdgrgregw'
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
        response.json(userId.name)
    }

    response.send(`this is list of user ${request.params.id}`)
})




module.exports = userRouter