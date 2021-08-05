'use strict'

const express = require("express");

// Constants
const PORT = process.env.PORT || 8080;


// application
const app = express();

app.get('/', (req, res) => {
    res.json(
        {'message': 'Hello World !'}
    );
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

module.exports = app;


