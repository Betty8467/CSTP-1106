const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.get('/user', (req, res) => {
    res.send("Hello User!");
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})