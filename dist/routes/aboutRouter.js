"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutController_1 = require("../controllers/aboutController");
const router = (0, express_1.Router)();
router.route('/').get(aboutController_1.getAbout).post(aboutController_1.addAbout);
router.route('/:id').put(aboutController_1.editAbout).delete(aboutController_1.deleteAbout);
exports.default = router;
