const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const all_notesRoute = require('./routes/all-notes')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Connected to database")
    app.listen(process.env.PORT,() =>{
        console.log(`Server started on ${process.env.PORT}`)
    })
})

app.use("/all-notes",all_notesRoute)

