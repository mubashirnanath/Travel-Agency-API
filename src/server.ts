import express,{ Application } from "express";

const app:Application = express()

app.get('/',(req,res)=>{
    res.send('hello')
})
const port :number = 8080
app.listen(port,()=>{
    console.log('server running successfully');
})