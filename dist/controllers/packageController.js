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
exports.deletePackage = exports.editPackage = exports.addPackages = exports.getSinglePackage = exports.getAllPackages = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const packageModel_1 = __importDefault(require("../models/packageModel"));
//@desc Get All Packages
//@route GET /api/package
exports.getAllPackages = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const packages = yield packageModel_1.default.find({});
    res.status(200).json(packages);
}));
//@desc Get a Package
//@route GET /api/package/:id
exports.getSinglePackage = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield packageModel_1.default.findById(id);
    res.status(200).json(result);
}));
//@desc Create a Package
//@route POST /api/package
exports.addPackages = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newPackage = new packageModel_1.default(data);
    const result = yield newPackage.save();
    res.status(201).json(result);
}));
//@desc Update a Package
//@route PUT /api/package/:id
exports.editPackage = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const changePackage = req.body;
    const result = yield packageModel_1.default.findByIdAndUpdate(id, changePackage);
    res.status(204).json({ status: "updated", result });
}));
//@desc Delete a Package
//@route DELETE /api/package/:id
exports.deletePackage = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedPackage = yield packageModel_1.default.findByIdAndDelete(id);
    res.status(204).json(deletedPackage);
}));
