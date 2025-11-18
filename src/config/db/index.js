// const mongoose = require("mongoose")

// async function connect(){

//     try {
//         await mongoose.connect('mongodb://localhost:27017/duong_edu_dev')
//         console.log('connect db duong ok')
//     } 
    
//     catch (error) {
//         console.log('fail')
//     }
// }
// module.exports = { connect }
// src/index.js hoặc file config DB

// const mongoose = require('mongoose');

// const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/duong_edu_dev';

// mongoose
//   .connect(uri)
//   .then(() => console.log('MongoDB connected:', uri))
//   .catch((err) => console.error('MongoDB connection error:', err));

const mongoose = require("mongoose");

async function connect() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/duong_edu_dev";

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected:", uri);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

module.exports = { connect };
