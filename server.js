const http = require('http');
const fs = require('fs');

const PORT = 3000;

http.createServer((req, res) => {

    const { url } = req; // get requested url

    if (url === "/" || url === "/home") {
        fs.readFile("./public/home.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (url === "/about") {

        fs.readFile("./public/about.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (url === "/contact") {

        fs.readFile("./public/contact.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (url === "/style.css") {

        fs.readFile("./public/style.css", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });

    } else {
        // if route doesn't match
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }

}).listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});
