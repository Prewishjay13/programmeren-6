const express = require('express')
const router = express.Router()
const {getRoutes, getPost, postRoutes, putRoutes, deleteRoutes} = require('../controllers/postController') //the function and the folder where its located

//this is the post routes file 


//changing these next lines so that the GET function gets executed through the controller
// router.get('/', (req, res) => {
//     res.status(200).json({message:"main routes page"})
// })
//to this:
// router.get('/', getRoutes); //this line and the POST line can be combined

//change this line like the example above
// router.post('/', (req, res) => {
//     res.status(200).json({message:"Set or create router"})
// })
// router.post('/', postRoutes); //this line and the GET line can be combined
//the controller is used here
router.route('/').get(getRoutes).post(postRoutes);

//use this:${req.params.id} to acces id at /:id
//to test code in postman dont forget to add /id  id= a number or just write id to test
//like this: http://localhost:8000/main/id
//next lines is being changed like the examples above(get and post)
// router.put('/:id', putRoutes); //this line and the DELETE line can be combined as well

//changing next lines too
// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `delete route for post number ${req.params.id}`})
// })
// router.delete('/:id', deleteRoutes)

router.route('/:id').put(putRoutes).delete(deleteRoutes);

router.route('/:id').get(getPost);
module.exports = router 
