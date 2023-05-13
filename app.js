const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const servicePage = require('./servicePage.js')
const contactusPage= require('./contactusPage.js')
const aboutusPage= require('./aboutusPage.js')
const homePage = require('./homePage.js')
const loginPage = require('./loginPage.js')
const productPage = require('./productPage.js')
const cors = require('cors');

app.set('view engine','ejs')

app.use(express.urlencoded({extend:true}))
app.use(cors())

 app.get('/',(request,response) =>{
    
    response.send("Get Router on app Page")
    response.sendStatus(404)

})


app.use('/servicePage',servicePage)
app.use('/contactusPage',contactusPage) 
app.use('/aboutusPage',aboutusPage) 
app.use('/productPage',productPage) 
app.use('/homePage',homePage)
app.use('/loginPage',loginPage)




 app.listen(3000)