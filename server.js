// Import required modules
const http = require('http');
const fs = require('fs');

// Define the port number
const PORT = 3000;

// Create HTTP server
http.createServer((req, res) => {

    // Extract the URL from the request
    const { url } = req;

    // Routing logic
    // Handle different routes and serve corresponding files
    // Route for Home page
    if (url === "/" || url === "/home") {
        // Read the home.html file
        fs.readFile("./public/home.html", (err, data) => {
            // Handle error while reading the file
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            // Send the file content as response
            res.end(data);
        });
    // Route for About page
    } else if (url === "/about") {
        // Read the about.html file
        fs.readFile("./public/about.html", (err, data) => {
            // Handle error while reading the file
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    // Route for Contact page
    } else if (url === "/contact") {
        fs.readFile("./public/contact.html", (err, data) => {
            // Handle error while reading the file
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        // Route for CSS file
    } else if (url === "/style.css") {
        fs.readFile("./public/style.css", (err, data) => {
            // Handle error while reading the file
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
        // Handle invalid routes (404 - Page Not Found)
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }

// Server listening on specified PORT
}).listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});