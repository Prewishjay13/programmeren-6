const mongoose = require('mongoose')

const detailSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },  
    title: {
        type: String,
        required: [true, 'ADD A TITLE!'],
      },
    text: {
      type: String,
      required: [true, 'NO empty posts allowed!'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Detail', detailSchema)