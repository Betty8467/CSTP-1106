const http = require("http");
const PORT = 4000;

const server = http.createServer((request, response) => {
    response.setHeader('Content-type', "text/html");

    if (request.url === "/"){
        response.write("<h1>HIIIIIIIII</h1>")
        

        response.end();
    }

    if (request.url === "/dog"){
        response.write('<img src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg">')
        

        response.end();
    }

    if (request.url === "/cat"){
        response.write('<img src= "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">')

        response.end();
    }
})

server.listen(PORT, () => {
    console.log("My Server is running on port", PORT);
})