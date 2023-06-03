import { Schema, model } from "mongoose";

// representing a document in mongodb
interface IDestination {
  cover_img:string,
  location:string,
}

// Define the schema for the Banner collection
const destinationSchema = new Schema<IDestination>(
    {
        cover_img:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export default model<IDestination>('Destination', destinationSchema);