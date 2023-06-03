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
exports.editBanner = exports.deleteBanner = exports.addBanner = exports.getAllBanners = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bannerModel_1 = __importDefault(require("../models/bannerModel"));
//@desc Get All Banners
//@route GET /api/banner
exports.getAllBanners = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const banners = yield bannerModel_1.default.find({});
    res.status(200).json(banners);
}));
//@desc Create new Banner
//@route POST /api/banner
exports.addBanner = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { image, title } = req.body;
    console.log(req.body);
    if (!title && !image) {
        throw new Error('image or title field missing');
    }
    const newBanner = new bannerModel_1.default({ image, title });
    const savedBanner = yield newBanner.save();
    res.status(201).json(savedBanner);
}));
//@desc Delete a Banner
//@route DELETE /api/banner/:id
exports.deleteBanner = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bannerId = req.params.id;
    const result = yield bannerModel_1.default.deleteOne({ _id: bannerId });
    res.json({ text: 'Deletion result', result });
}));
//@desc Edit a Banner
//@route PUT /api/banner/:id
exports.editBanner = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bannerId = req.params.id;
    const changedBanner = req.body;
    yield bannerModel_1.default.findByIdAndUpdate(bannerId, changedBanner);
    res.json('Banner updated');
}));
