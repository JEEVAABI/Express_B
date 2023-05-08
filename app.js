const express = require('express')
const app = express()
const servicePage = require('./servicePage.js')

app.set('view engine','ejs')

app.use(express.urlencoded({extend:true}))

 app.get('/',(request,response) =>{
    
    response.send("Get Router on app Page")
    response.sendStatus(404)

})


app.use('/servicePage',servicePage) 




 app.listen(3000)