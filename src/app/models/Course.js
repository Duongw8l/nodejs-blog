const mongoose = require("mongoose");
var slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
  name: String,
  description: String,
  image: String,
  videoId: String,
  level: String,
  slug:{type:String, slug: 'name', unique: true },
  // createAt: Date,
  // updateAt: Date,
  
  // videoId:{type:String,maxLength:255}
},
{
  timestamps: true,   // tự tạo createdAt & updatedAt
});

module.exports = mongoose.model('Course', Course)
