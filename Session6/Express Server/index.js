const express = require('express');

const app = express();
const PORT = 4000;
const student = [];

//Telling express that the data I am getting is of type JSON
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to student APIs");
})

// We are trying to post student data in the server
app.get('/students', (req, res) => {
    //For get response we give 200 response
    //const data = res.status(200);
    //return data.json(student);
    return res.status(200).json(student);
})


app.post('/students', (re, res) => {

    const studentData = req.body;
    student.push(studentData);
    //201 is used when you are trying to 

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
