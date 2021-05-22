const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

const {v4: uuidv4 } = require('uuid');
// const {getAndRenderNotes} = require('./public/assets/js/index.js');
const db  = require('./db/db.json');
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




// Routes

// HTML Routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});

// loads notes from db on page load
app.get('/api/notes', (req, res) => {
    const note = db;
    return res.json(note);
});

// save new note to db.json
app.post('/api/notes', (req, res) => {
    // add uuid to note when saved
    req.body.id = uuidv4();
    // push to the array
    const newNote = req.body;
    db.push(newNote);
    // db.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify( db , null, 2)
    );

    res.json(db);
});

// delete route
app.delete('/api/notes/:id', (req,res) => {
    const id = req.params.id;
    const index = db.findIndex(notes => notes.id === req.params.id);

    if(index > -1) {
        db.splice(index,1);
    }

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify( db , null, 2)
    );

    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

