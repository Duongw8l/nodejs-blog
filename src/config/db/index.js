const mongoose = require("mongoose")

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/duong_edu_dev')
        console.log('connect db duong ok')
    } 
    
    catch (error) {
        console.log('fail')
    }
}
module.exports = { connect }
