const appConfig = require('./../configuration/appConfig')

let requestIpLogger = (req, res, next) =>{

    let remoteIp = req.connection.remoteAddress + '://' + req.connection.remotePort
    let realIp = req.headers['X-REAL-IP']
    console.log(req.method+' Request made from '+ remoteIp+' for route '+req.originalUrl)

    //handling CORS
    if(req.method === 'OPTIONS'){
        console.log("!OPTIONS")
        var headers

        //IE8 does not allow domains to be specific, just the *
        headers["Access-Control-Allow-Origin"] = "*"
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"
        headers["Access-Control-Allow-Credentials"] = false
        headers["Access-Control-Max-Age"] = '86400'
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-type, Accept"
        res.writeHead(200, headers)
        res.end()
    } else {

        //enable or disable cors here
        res.header("Access-Control-Allow-Origin", appConfig.allowedOrigin)
        res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE, OPTIONS')
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept")
        //end cors config
        next()
        
    } // end condition
} // end ip blogger

module.exports = {
    logIp: requestIpLogger
}