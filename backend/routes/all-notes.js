const express = require('express');
const {getAllNotes,getLastNote,getSingleNote,postNote,deleteNote,updateNote} = require('../controllers/notesController')

const router = express.Router();

router.get("/",getAllNotes)

router.get("/last",getLastNote)

router.get("/:id",getSingleNote)

router.post("/",postNote)

router.delete("/:id",deleteNote)

router.patch("/:id",updateNote)

module.exports = router;