const express = require('express')
const router = express.Router()

const sitecontroller = require('../app/controllers/Sitecontroller')


router.use('/search', sitecontroller.search)
//newcontroller index
router.use('/', sitecontroller.index)


module.exports = router