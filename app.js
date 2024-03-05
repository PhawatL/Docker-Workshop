const express = require('express')
const path = require('path')
const os = require('os')
const app = express()


let counter = 0;

app.get('/',(req,res)=>{
    res.end(`<div>Hostname (ContainerID) : ${os.hostname} </div> Count : ${counter++}`)
})
let port = 3000

app.listen(port,()=>{
    console.log(`Listening Port ${port}`)
})