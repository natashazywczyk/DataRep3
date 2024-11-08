//Create Express Application
const express = require('express');
const app = express();
const port = 4000; //make localhost port 4000

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});