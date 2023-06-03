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
exports.deleteDestination = exports.updateDestination = exports.addDestination = exports.getSingleDestination = exports.getAllDestinations = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const destinationModel_1 = __importDefault(require("../models/destinationModel"));
//@desc Get All Destinations
//@route GET /api/destination
exports.getAllDestinations = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const destinations = yield destinationModel_1.default.find({});
    res.status(200).json(destinations);
}));
//@desc Get All Destinations
//@route GET /api/destination
exports.getSingleDestination = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singleDestination = yield destinationModel_1.default.findById(id);
    res.status(200).json(singleDestination);
}));
//@desc Create a Destinations
//@route POST /api/destination
exports.addDestination = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cover_img, location, no_of_packages } = req.body;
    if (!cover_img && !location && !no_of_packages) {
        throw new Error('All fields required');
    }
    const newDestination = new destinationModel_1.default({ cover_img, location, no_of_packages });
    const result = yield newDestination.save();
    res.status(201).json(result);
}));
//@desc Update a Destinations
//@route PUT /api/destination/:id
exports.updateDestination = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const changeDestination = req.body;
    yield destinationModel_1.default.findByIdAndUpdate(id, changeDestination);
    res.json('destionation updated');
}));
//@desc Delete a Destinations
//@route DELETE /api/destination/:id
exports.deleteDestination = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield destinationModel_1.default.findByIdAndDelete(id);
    res.json('destination deleted');
}));
