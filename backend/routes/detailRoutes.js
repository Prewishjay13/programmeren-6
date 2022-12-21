const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'this is a details test'})
})
//send info
router.post('/', (req, res) => {
    res.status(200).json({message: 'this is a details test'})
})
//update
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update ${req.params.id}`})
})

router.delete('/', (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id}`})
})

module.exports = router