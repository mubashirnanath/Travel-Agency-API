import { Schema, model } from "mongoose";

// representing a document in mongodb
interface IBanner {
  title:string,
  image:string
}

// Define the schema for the Banner collection
const bannerSchema = new Schema<IBanner>(
    {
        title:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    }
)

export default model<IBanner>('Banner', bannerSchema);