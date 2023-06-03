"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongooseConnect = process.env.MONGO_URL;
if (mongooseConnect) {
    mongoose_1.default.connect(mongooseConnect);
}
const connection = mongoose_1.default.connection;
connection.on("connected", () => {
    console.log("Mongodb is connected");
});
connection.on("error", (err) => {
    console.log("error in  mongodb connection", err);
});
exports.default = mongoose_1.default;
