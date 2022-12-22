const asyncHandler = require('express-async-handler')


const getDetails =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Details'})
})

const setDetail = asyncHandler(async (req, res) => {
    //console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set Details'})
})

const updateDetails =  asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update ${req.params.id}`})
})

const deleteDetail =  asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id}`})
})


module.exports = {
    getDetails,
    setDetail,
    updateDetails,
    deleteDetail,
}