import {Router} from 'express'
import { addDestination, deleteDestination, getAllDestinations, getSingleDestination, updateDestination } from '../controllers/destinationController'

const router:Router=Router()

router.route('/').get(getAllDestinations).post(addDestination)
router.route('/:id').get(getSingleDestination).put(updateDestination).delete(deleteDestination)
export default router