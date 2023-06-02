import { Router } from "express";
import {addBanner} from '../controllers/bannerController'

const router:Router = Router()

router.route('/').post(addBanner)

export default router