const express = require('express');
const path = require('path');

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

// app.get('/api/notes/:note', (req,res) => {
//     const result = req.params.db;

//     return res.json(result);
// });
// save new note to db.json
app.post('/api/notes', (req, res) => {
    const note = req.body;
    console.log('api push conosle log ' + note);
    // generate a UUID and attach it to the note
    note.id = uuidv4();

    console.log(note.id);

    db.push(note);
    res.json(db);
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

