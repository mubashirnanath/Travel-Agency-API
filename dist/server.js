"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./config/connection"));
const bannerRouter_1 = __importDefault(require("./routes/bannerRouter"));
const aboutRouter_1 = __importDefault(require("./routes/aboutRouter"));
const packageRouter_1 = __importDefault(require("./routes/packageRouter"));
const destinationRouter_1 = __importDefault(require("./routes/destinationRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
connection_1.default;
app.use(express_1.default.json());
app.use('/api/banner', bannerRouter_1.default);
app.use('/api/about', aboutRouter_1.default);
app.use('/api/destination', destinationRouter_1.default);
app.use('/api/package', packageRouter_1.default);
const port = 5000;
app.listen(port, () => {
    console.log('server running successfully');
});
