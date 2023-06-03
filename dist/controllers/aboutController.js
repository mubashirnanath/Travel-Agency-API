"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAbout = exports.editAbout = exports.addAbout = exports.getAbout = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const aboutModel_1 = __importDefault(require("../models/aboutModel"));
//@desc Get About Data
//@route GET /api/about/
exports.getAbout = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield aboutModel_1.default.find({});
    res.status(200).json(data);
}));
//@desc Create About Data
//@route POST /api/about/
exports.addAbout = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, image } = req.body;
    if (!title && !description && !image) {
        throw new Error('fields are incomplete');
    }
    const newAbout = new aboutModel_1.default({ title, description, image });
    const savedAbout = yield newAbout.save();
    res.status(201).json(savedAbout);
}));
//@desc Edit About Data
//@route PUT /api/about/:id
exports.editAbout = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aboutId = req.params.id;
    const changedAbout = req.body;
    yield aboutModel_1.default.findByIdAndUpdate(aboutId, changedAbout);
    res.json('about updated');
}));
//@desc Delete About Data
//@route DELETE /api/about/:id
exports.deleteAbout = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aboutId = req.params.id;
    const deletedAbout = yield aboutModel_1.default.findByIdAndDelete(aboutId);
    res.json({ result: 'Deletion result', deletedAbout });
}));
