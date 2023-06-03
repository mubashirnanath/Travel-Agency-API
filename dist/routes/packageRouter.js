"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const packageController_1 = require("../controllers/packageController");
const router = (0, express_1.Router)();
router.route('/').get(packageController_1.getAllPackages).post(packageController_1.addPackages);
router.route('/:id').get(packageController_1.getSinglePackage).delete(packageController_1.deletePackage).put(packageController_1.editPackage);
exports.default = router;
