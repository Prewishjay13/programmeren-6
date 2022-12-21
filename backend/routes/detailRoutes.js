const express = require('express')
const router = express.Router()
const {getDetails,  setDetail, updateDetails, deleteDetail} = require('../controllers/detailController')

router.get('/', getDetails)
//send info
router.post('/', setDetail)
//update
router.put('/:id', updateDetails)

router.delete('/:id', deleteDetail)

module.exports = router