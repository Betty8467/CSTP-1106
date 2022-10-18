const express = require("express");
const app = express ();
const PORT = 5000;


const posts = [
    {
    Title: "Latest Tech",
    author: "Betty",
    timeRequired: "2 minutes",
    description: "This is an artivle fro the latest technologies fro example - BlockChain, IOT"
    },
    {
    Title: "Life in Vancouver ",
    author: "Betty",
    timeRequired: "1 minutes",
    description: "This is an artivle fro the latest technologies fro example - BlockChain, IOT"
    }
]


app.get("/", (req, res) => {
    //Redirecting to new routes
    res.redirect("/api/v1")
});


app.get("/api/v1", (req, res) => {
    res.send("ENDPOINTS");
});

app.get("/api/v1/posts", (req, res) =>{
    return res.status(200).json({
        message: 'Succsefully fetched the articles',
        data: articles
    })
});

app.get("api/v1/posts/:id", (req, res) => {

    const id = req.params.postid;

        // Loop way
    for (let i - 0; i < articles.length; i++){
        console.log(articles[i])
    }
})


app.listen(PORT, () => {
    console.log(`Server runnin gon port ${PORT}`);
})