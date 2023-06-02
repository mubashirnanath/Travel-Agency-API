import { Router } from "express";
import { addAbout, deleteAbout, editAbout, getAbout } from "../controllers/aboutController";

const router:Router = Router()

router.route('/').get(getAbout).post(addAbout)
router.route('/:id').put(editAbout).delete(deleteAbout)

export default router