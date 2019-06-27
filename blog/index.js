const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const appConfig = require('./configuration/appConfig')
const bodyParser = require('body-parser')
const globalErrorMiddleware = require('./middleware/appErrorHandler')
const routeLoggerMiddleware = require('./middleware/routeLogger')
const helmet = require('helmet')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)
app.use(helmet())

app.listen(appConfig.port, ()=>{
    console.log("App listening to  port 3000")
    mongoose.set('useCreatIndex', true)
    let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser: true})
})

//reading files from the routing files
let routerPath = './routes'
fs.readdirSync(routerPath).forEach(function(file){
    if(~file.indexOf('.js')){
        console.log("Including the files from routes")
        let route = require(routerPath+'/'+file)
        route.setRouter(app)
    }
})
// end importing routing files

app.use(globalErrorMiddleware.globalNotFoundHandler)

//reading files from models
let modelsPath = './models'
fs.readdir(modelsPath, function(err, file){
    if(err){
        console.log('Unable to read files from Models')
    } else {
        console.log("Including files from models")
        require(modelsPath+'/'+file)
    }
}) // end reading from models


//handling mongoose connection error
mongoose.connection.on('error', function(err){
    console.log('Unable to Connect to database')
    console.log(err)
}) // end mongoose error

//handling mongoose connection
mongoose.connection.on('open', function(err){
    if(err){
        console.log("Some error occured in database")
    } else {
        console.log("Database connected succesfully")
    }
}) // end mongoose connection error