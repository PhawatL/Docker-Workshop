const express = require('express')
const path = require('path')
const app = express()
const os = express('os')

let counter = 0;

app.get('/',(req,res)=>{
    res.end(`<div>Hostname (ContainerID) :<strong> ${os.hostname}</strong></div> Count : ${counter++}`)
})
let port = 3000

app.listen(port,()=>{
    console.log(`Listening Port ${port}`)
})