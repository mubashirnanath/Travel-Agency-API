import { Schema, model } from "mongoose";

// representing a document in mongodb
interface IAbout {
  title:string,
  description:string,
  image:string
}

// Define the schema for the Banner collection
const aboutSchema = new Schema<IAbout>(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

export default model<IAbout>('About', aboutSchema);