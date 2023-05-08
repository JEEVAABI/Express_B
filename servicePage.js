const express = require('express')
const userRouter = express.Router()

const listOfServices = [
    {
        
        'service' : 'app development',
        'servicePrice' : 500,
        'serviceTime' : 'One Month'
    },
    {
        
        'service' : 'web development',
        'servicePrice' : 1000,
        'serviceTime' : 'two Month'
    },
    {
        
        'service' : 'full stack',
        'servicePrice' : 5000,
        'serviceTime' : 'three Month'
    },
    {
        
        'service' : 'backend devlopment',
        'servicePrice' : 1000,
        'serviceTime' : 'two Month'
    },
    {
        
        'service' : 'frontend development',
        'servicePrice' : 500,
        'serviceTime' : 'One Month'
    }
    ,
    {
        
        'service' : 'Mobile app development',
        'servicePrice' : 1500,
        'serviceTime' : 'two Month'
    }
    ,
    {
        
        'service' : 'E-commerce website development',
        'servicePrice' : 2000,
        'serviceTime' : 'four Month'
    }
    ,
    {
        
        'service' : 'Custom software development',
        'servicePrice' : 3000,
        'serviceTime' : 'five Month'
    }
    ,
    {
        
        'service' : 'Cloud infrastructure setup and maintenance',
        'servicePrice' : 4000,
        'serviceTime' : 'six Month'
    }
    ,
    {
        
        'service' : 'UX/UI design',
        'servicePrice' : 800,
        'serviceTime' : 'One Month'
    }
    
    
]
userRouter.get('/',(request,response)=>{
    response.send('this is service page')
})

// userRouter.get('/:id([0-9]{1})',(request,response)=>{
//     response.send(request.user)
    
// })

userRouter.param('id',(request,response,next,id)=>{
    request.user = listOfServices[id-1]
    next()
})

userRouter.get('/new',(request,response)=>{
    response.render('users/new')
})

userRouter.post('/',(request,response)=>{
    
    //console.log(request.body.firstname)
    listOfServices.push({service:request.body.servicename})
    // listOfServices.push({servicePrice:request.body.serviceCost})
    // listOfServices.push({serviceTime:request.body.serviceduration})

    response.redirect(`/servicePage/${listOfServices.length}`)
})




userRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(`${request.user.service} with id ${request.params.id} is cost of 
    ${request.user.servicePrice} and it takes ${request.user.serviceTime} to complete`)
    //console.log(typeof listOfServices[0].servicePrice);

})

// userRouter.param('id', (request, response, next, id) => {
//     console.log(`id: ${id}`);
//     console.log(`listOfServices: ${JSON.stringify(listOfServices)}`);
//     console.log(`listOfServices[id-1]: ${JSON.stringify(listOfServices[id-1])}`);
//     request.user = listOfServices[id - 1];
//     console.log(`request.user: ${JSON.stringify(request.user)}`);
//     next();
// });
// userRouter.param('id', (request, response, next, id) => {
//     const index = parseInt(id, 10) - 1;
//     if (index < 0 || index >= listOfServices.length) {
//       return response.status(404).send('Service not found');
//     }
//     request.user = listOfServices[index];
//     next();
//   });
  



module.exports = userRouter