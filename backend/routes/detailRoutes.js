const express = require('express')
const router = express.Router()
const {getDetails,  setDetail, updateDetails, deleteDetail} = require('../controllers/detailController')

//router.get('/', getDetails)
//send info
//router.post('/', setDetail)
//update
//router.put('/:id', updateDetails)
//delete
//router.delete('/:id', deleteDetail)
router.route('/').get(getDetails).post(setDetail)
router.route('/:id').delete(deleteDetail).put(updateDetails)
module.exports = router