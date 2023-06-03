import express,{ Application } from "express";
import dotenv from 'dotenv'
import connection from "./config/connection";
import bannerRouter from "./routes/bannerRouter";
import aboutRouter from "./routes/aboutRouter";
import packageRouter from "./routes/packageRouter";
import destinationRouter from "./routes/destinationRouter";
dotenv.config()

const app:Application = express()
connection;
app.use(express.json())


app.use('/api/banner',bannerRouter)
app.use('/api/about',aboutRouter)
app.use('/api/destination',destinationRouter)
app.use('/api/package',packageRouter)


const port :number = 5000
app.listen(port,()=>{
    console.log('server running successfully');
})