import express,{ Application } from "express";
import dotenv from 'dotenv'
import connection from "./config/connection";
import bannerRouter from "./routes/bannerRouter";
dotenv.config()

const app:Application = express()
connection;
app.use(express.json())


app.use('/api/banner',bannerRouter)


const port :number = 5000
app.listen(port,()=>{
    console.log('server running successfully');
})