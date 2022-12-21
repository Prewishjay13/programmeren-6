const express = require ('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000 //dit gaat naar de .envfile bij de port variable 

const app = express()

//routes (should be in a seperate folder)
//how to send a get request, this can be used in postman
// app.get('/api/details', (req, res) => {
//     res.send('details')
// })
// app.get('/api/details', (req, res) => {
//     res.json({message: 'this is a details test'})
// })
app.get('/api/details', (req, res) => {
    res.status(200).json({message: 'this is a details test'})
})
app.listen(port, () => console.log(`Server started on port ${port}`))
