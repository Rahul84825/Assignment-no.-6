const http = require('http');
const fs = require('fs');

const PORT = 3000;

http.createServer((req, res) => {

    const { url } = req;

    if(url === '/' || url === '/home'){
        fs.readFile('./public/home.html',(err,data) => {
            if(err){
                res.writeHead(500, {'content-type': 'text/html'});
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data);
        });
    }else if(url === '/about'){
        fs.readFile('./public/about.html',(err,data) => {
            if(err){
                res.writeHead(500, {'content-type': 'text/html'});
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data);
        });
    }else  if(url === '/contact'){
        fs.readFile('./public/contact.html',(err,data) => {
            if(err){
                res.writeHead(500, {'content-type': 'text/html'});
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data);
        });
    }else if (url === '/styles.css') {
        fs.readFile('./public/styles.css',(err,data) => {
            if(err){
                res.writeHead(500, {'content-type': 'text/css'});
                res.end("<h1>500 Server Error</h1>");
                return;
            }
            res.writeHead(200, {'content-type': 'text/css'})
            res.end(data);
        });
    }else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("<h1>404 Page Not Found</h1>");
    }
}).listen(PORT,() =>{ 
    console.log(`Server is running on port http://localhost:${PORT}/`);
})