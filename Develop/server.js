const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

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


app.get('/api/notes', (req, res) => {
    const note = db;
    console.log('api get note console log ' + note);
    return res.json(note);
});



app.post('/api/notes', (req, res) => {
    const note = req.body;
    console.log('api push conosle log ' + note);
    res.json(note);

})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
