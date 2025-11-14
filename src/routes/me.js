const express = require('express');
const router = express.Router();

const mecontroller = require('../app/controllers/Mecontroller');

// /courses/:slug
router.get('/stored/courses', mecontroller.storedCourses);


module.exports = router;
