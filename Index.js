// import json server
const jsonServer = require('json-server')
//create a server
const Server = jsonServer.create()
//setup path for db.json file
const router = jsonServer.router("db.json")
//Return Middleware used by json server
const Middleware = jsonServer.defaults()
//setup port for server
const port = process.env.port||3001
//Use middleware and server
Server.use(Middleware)
Server.use(router)
//To run the server
Server.listen(port,()=>{
    console.log('Listening on port ' + port);
})