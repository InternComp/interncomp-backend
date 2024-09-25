// filename: server.js
//example using the http module
const req = require('express/lib/request');
const http = require('http');

// create a http server

const server = http.createServer((req, res) => {
        //set the response headers
    res.writeHead(200, {'Content-Type': 'text/html'});

    //Write the response content
    res.write('<h1>Hello, Node.js HTTP Server!</h1>');
    res.end();
});

//specify the port to listen on
const port = 3000;

//Start the server
server.listen(port, () => {
    console.log(`Node.j HTTP Server is running on port ${port}`);
});