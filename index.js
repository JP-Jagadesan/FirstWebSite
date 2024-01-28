const express = require("express");
const bodyParser = require("body-parser");
const http = require("http")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/ping",(req,res,next)=>{
    res.status(400).send("pinged")
})

const server = http.createServer(app)
server.listen(3001)
