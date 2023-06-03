"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tourPlanSchema = new mongoose_1.Schema({
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const packageSchema = new mongoose_1.Schema({
    dest_id: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    peoples: {
        type: Number,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    diparture_time: {
        type: String,
        required: true
    },
    return_time: {
        type: String,
        required: true
    },
    cover_img: {
        type: String,
        required: true
    },
    price_includes: {
        type: [String],
        required: true
    },
    price_excludes: {
        type: [String],
        required: true
    },
    pictures: {
        type: [String],
        required: true
    },
    tour_plan: {
        type: [tourPlanSchema],
        required: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Tour_package", packageSchema);
