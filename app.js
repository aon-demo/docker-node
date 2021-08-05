'use strict'

const express = require("express");

// Constants
const PORT = 8080;


// application
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.post('/test', (req, res) => {
    var body = req.body;    
    res.send(body);
});

app.use(express.urlencoded({ 
    extended: true
}));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});


