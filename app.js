const express = require('express')
const app = express()
// const servicePage = require('./servicePage.js')
const userRouter = require('./users')

 app.get('/',(request,response) =>{
    
    response.send("Get Router on app Page")
    response.sendStatus(404)

})


// app.use('/servicePage',servicePage) 
app.use('/users',userRouter)
app.use('/aboutusPage', aboutusPage)
app.use('/contactusPage', contactusPage)
app.use('/productPage',productPage)
app.use('/loginPage',loginPage)



 app.listen(3500)