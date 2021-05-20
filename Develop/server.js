const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




// routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
