const express = require('express')
const os = require('os')
const app = express()
let counter = 0;

app.get('/',(req,res)=>{
    res.end(`<div>Hostname (ContainerID) :<strong> ${os.hostname}</strong></div> Count : ${counter++}`)
})

app.listen(3000,()=>{
    console.log("Server Running at port 3000")
})