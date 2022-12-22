const asyncHandler = require('express-async-handler')
const { restart } = require('nodemon')

const Detail = require('../models/detailModel')
const User = require('../models/userModel')

const getDetails =  asyncHandler(async (req, res) => {
    const details = await Detail.find({ user: req.user.id })

    res.status(200).json(details)
})

const setDetail = asyncHandler(async (req, res) => {
    //console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const detail = await Detail.create({
        title: req.body.title,
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(detail)
})

const updateDetails =  asyncHandler(async (req, res) => {
    const detail = await Detail.findById(req.params.id)
    if(!detail) {
        res.status(400)
        throw new console.error("details not found");
    }

    //checking for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //user logged in mathches detail user
    if (detail.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('This user not authorized')
    }

    const updatedDetail = await Detail.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedDetail)
})

const deleteDetail =  asyncHandler(async (req, res) => {
   const detail = await Detail.findById(req.params.id)

   if(!detail) {
    restart.status(400)
    throw new Error('Not found')
   }

   if (!req.user) {
    res.status(401)
    throw new Error("not Authorized")
   }
    await detail.remove()
   
   res.status(200).json({id: req.params.id})
})


module.exports = {
    getDetails,
    setDetail,
    updateDetails,
    deleteDetail,
}