const express = require('express')
const router = express.Router()

const newcontroller = require('../app/controllers/Newcontroller')


router.use('/:slug', newcontroller.show)
//newcontroller index
router.use('/', newcontroller.index)


module.exports = router