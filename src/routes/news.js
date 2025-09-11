const express = require('express')
const router = express.Router()

const newcontroller = require('../app/controllers/Newcontroller')


router.get('/:slug', newcontroller.show)
//newcontroller index
router.get('/', newcontroller.index)


module.exports = router