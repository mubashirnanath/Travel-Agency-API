"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bannerController_1 = require("../controllers/bannerController");
const router = (0, express_1.Router)();
router.route('/').get(bannerController_1.getAllBanners).post(bannerController_1.addBanner);
router.route('/:id').delete(bannerController_1.deleteBanner).put(bannerController_1.editBanner);
exports.default = router;
