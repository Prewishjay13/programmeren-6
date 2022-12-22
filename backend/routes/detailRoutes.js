const express = require('express')
const router = express.Router()
const {getDetails,  setDetail, updateDetails, deleteDetail} = require('../controllers/detailController')
const { protect } = require('../middleware/authMiddleware')
//router.get('/', getDetails)
//send info
//router.post('/', setDetail)
//update
//router.put('/:id', updateDetails)
//delete
//router.delete('/:id', deleteDetail)
router.route('/').get(protect, getDetails).post(protect, setDetail)
router.route('/:id').delete(protect, deleteDetail).put(protect, updateDetails)
module.exports = router