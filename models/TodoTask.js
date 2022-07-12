
const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
username: {
type: String,
required: true
},
email:{
type: String,
required: true
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);