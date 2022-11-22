const express = require ('express');
const app = express();
const PORT = 5000;


app.set("view engine", "ejs");
app.get("\result", (req,res)=> {

});

app.listen(PORT, ()=>{
    console.log(`Server running pn port ${PORT}`);
})