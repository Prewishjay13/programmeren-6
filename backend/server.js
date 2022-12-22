const express = require ('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.port || 5000 //dit gaat naar de .envfile bij de port variable 

connectDB()

const app = express()

//routes (should be in a seperate folder)
//how to send a get request, this can be used in postman
// app.get('/api/details', (req, res) => {
//     res.send('details')
// })
// app.get('/api/details', (req, res) => {
//     res.json({message: 'this is a details test'})
// })
// app.get('/api/details', (req, res) => {
//     res.status(200).json({message: 'this is a details test'})
// })

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/details', require('./routes/detailRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
