import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const mongooseConnect: string | undefined = process.env.MONGO_URL;

if (mongooseConnect) {
  mongoose.connect(mongooseConnect);
}
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongodb is connected");
});

connection.on("error", (err) => {
  console.log("error in  mongodb connection", err);
});

export default mongoose;
