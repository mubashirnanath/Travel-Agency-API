import { Router } from "express";
import {addBanner, deleteBanner, editBanner, getAllBanners} from '../controllers/bannerController'

const router:Router = Router()

router.route('/').get(getAllBanners).post(addBanner)
router.route('/:id').delete(deleteBanner).put(editBanner)

export default router