const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const notesSchema = new Schema({
    author:{
        type: String,
        required:true
    },
    content:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Note = new mongoose.model("Note",notesSchema);
module.exports = Note