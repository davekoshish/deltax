const mongoose = require('mongoose');
const artistSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
dob:{
type: Date,
required: true
},
bio:{
    type:String,
    required: true
}
})
const newLocal = 'Artist';
module.exports = mongoose.model(newLocal,artistSchema);