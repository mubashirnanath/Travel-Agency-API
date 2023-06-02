import { Router,Request,Response } from "express";
import { addPackages, deletePackage, editPackage, getAllPackages, getSinglePackage } from "../controllers/packageController";

const router : Router = Router()

router.route('/').get(getAllPackages).post(addPackages)
router.route('/:id').get(getSinglePackage).delete(deletePackage).put(editPackage)

export default router