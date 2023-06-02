import {model,Schema} from 'mongoose'

interface IPackage {
    location:string,
    price:number,
    description:string,
    days:number,
    peoples:number,
    departure:string,
    diparture_time:string,
    return_time:string,
    cover_img:string,
    price_includes:string[],
    price_excludes:string[],
    pictures:string[]
    tour_plan:ITourPlan[]
}

interface ITourPlan {
    day: number;
    title: string;
    description: string;
  }
  const tourPlanSchema: Schema<ITourPlan> = new Schema<ITourPlan>({
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  });
const packageSchema = new Schema<IPackage>(
    {
        location:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        days:{
            type:Number,
            required:true
        },
        peoples:{
            type:Number,
            required:true
        },
        departure:{
            type:String,
            required:true
        },
        diparture_time:{
            type:String,
            required:true
        },
        return_time:{
            type:String,
            required:true
        },
        cover_img:{
            type:String,
            required:true
        },
        price_includes:{
            type: [String],
            required:true
        },
        price_excludes:{
            type: [String],
            required:true
        },
        pictures:{
            type: [String],
            required:true
        },
        tour_plan:{
            type:[tourPlanSchema],
            required:true
        }
    },
    {
        timestamps:true
    }
)

export default model<IPackage>("Tour_package",packageSchema)