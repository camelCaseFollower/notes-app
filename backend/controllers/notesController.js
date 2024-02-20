const Notes = require('../models/Notes')

//The function is async because it takes some time to finish
//NotesList is the result of the function Notes.find(), await keyword will wait for the function to finish
const getAllNotes = async (req,res) => {
    const NotesList = await Notes.find().sort({_id:-1});
    res.json(NotesList);
}

const getLastNote = async (req,res) => {
    const LastNote = await Notes.findOne().sort({_id:-1});
    res.json(LastNote);
}

const getSingleNote = async (req,res) => {
    const {id} = req.params;
    const note = await Notes.findById(id);
    res.json(note);
}

const postNote = async (req,res) => {
    const {author,content} = req.body;
    try{
        if(!author || !content){
            throw Error("Field cant be empty");
        }
    const new_note = new Notes(req.body);
    await new_note.save();
    res.json(new_note);
    }
    catch(error){
        res.status(400).end(error);
    }
}

const deleteNote = async (req,res) => {
    try{
    const {id} = req.params;
    await Notes.findByIdAndDelete(id);
    res.end("Deleted!");
    }
    catch(err){
        console.log(err)
    }
}

//The first object passed to the findByIdAndUpdate method is the criteria for the notes to search and the second
//is the object containing the fields to replace, there we are spreading the object properties and values
const updateNote = async (req,res) => {
    const {id} = req.params;
    const note = await Notes.findByIdAndUpdate({_id:id},{
        ...req.body
    });
    res.json(note);
}

module.exports = {getAllNotes,getLastNote,getSingleNote,postNote,deleteNote,updateNote}