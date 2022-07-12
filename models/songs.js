const mongoose = require('mongoose');
const songsSchema = new mongoose.Schema({
sname: {
type: String,
required: true
},
srelease:{
type: Date,
required: true
},

    img:
    {
        data: Buffer,
        contentType: String
    },

artist:{
    type:String,
    required:true
}
})
const newLocal = 'Songs';
module.exports = mongoose.model(newLocal,songsSchema);