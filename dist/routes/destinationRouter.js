"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const destinationController_1 = require("../controllers/destinationController");
const router = (0, express_1.Router)();
router.route('/').get(destinationController_1.getAllDestinations).post(destinationController_1.addDestination);
router.route('/:id').get(destinationController_1.getSingleDestination).put(destinationController_1.updateDestination).delete(destinationController_1.deleteDestination);
exports.default = router;
