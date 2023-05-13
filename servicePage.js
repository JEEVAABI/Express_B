const express = require('express')
const userRouter = express.Router()


const listOfServices = [
    {
        
        'serviceName' : 'app development',
        'servicePrice' : 500,
        'serviceTime' : 'One Month'
    },
    {
        
        'serviceName' : 'web development',
        'servicePrice' : 1000,
        'serviceTime' : 'two Month'
    },
    {
        
        'serviceName' : 'full stack',
        'servicePrice' : 5000,
        'serviceTime' : 'three Month'
    },
    {
        
        'serviceName' : 'backend devlopment',
        'servicePrice' : 1000,
        'serviceTime' : 'two Month'
    },
    {
        
        'serviceName' : 'frontend development',
        'servicePrice' : 500,
        'serviceTime' : 'One Month'
    }
    ,
    {
        
        'serviceName' : 'Mobile app development',
        'servicePrice' : 1500,
        'serviceTime' : 'two Month'
    }
    ,
    {
        
        'serviceName' : 'E-commerce website development',
        'servicePrice' : 2000,
        'serviceTime' : 'four Month'
    }
    ,
    {
        
        'serviceName' : 'Custom software development',
        'servicePrice' : 3000,
        'serviceTime' : 'five Month'
    }
    ,
    {
        
        'serviceName' : 'Cloud infrastructure setup and maintenance',
        'servicePrice' : 4000,
        'serviceTime' : 'six Month'
    }
    ,
    {
        
        'serviceName' : 'UX/UI design',
        'servicePrice' : 800,
        'serviceTime' : 'One Month'
    },
   
]


userRouter.get('/',(request,response)=>{
    response.send('this is service page')
})




// userRouter.get('/:id([0-9]{1})',(request,response)=>{
//     response.send(request.user)
    
// })




userRouter.get('/new',(request,response)=>{
    response.render('users/new')
})




userRouter.post('/',(request,response)=>{
    
    //console.log(request.body.firstname)
    listOfServices.push({serviceName:request.body.nameOfService, servicePrice:request.body.priceOfService, serviceTime:request.body.durationOfService})

    response.redirect(`/servicePage/${listOfServices.length}`)
})




userRouter.get('/:id',(request,response)=>{

     response.send(`${request.service.serviceName} with id ${request.params.id} is cost of 
    ${request.service.servicePrice} and it takes ${request.service.serviceTime} to complete`)
    //console.log(typeof listOfServices[0].servicePrice);

})




userRouter.param('id',(request,response,next,id)=>{
    request.service = listOfServices[id-1]
    console.log(request.service);
    next()
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
//     // const index = parseInt(id, 10) - 1;
//     // if (index < 0 || index >= listOfServices.length) {
//     //   return response.status(404).send('Service not found');
//     // }
    
//     request.service = listOfServices[id];
//     console.log(listOfServices[id]);
//     next();
//   });
  



module.exports = userRouter