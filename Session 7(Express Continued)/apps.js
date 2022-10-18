const express = require("express");
const app = express ();
const PORT = 4000;
const path = require('path');

/*
const logger = (req, res, next) => {
    console.log("I am inside this middleware");
    next();
}
*/

//app.use(express.static(path.join(____dirname, "public")))

//This is how you serve the 
app.use(express.static("public"));

//App.use is used to implement middlewares
app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})