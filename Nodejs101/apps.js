const http = require('http');

// fs = file system
const fs = require('fs');

// req = what the browser is asking for
// res = the thing we use to talk back to the browser
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        console.log("Someone reqeusted a page!!!!",req.url);
        // res.end('<h1>Sanity Check</h1>');
        res.writeHead(200,{'content-type':'text/html'});
        const homePageHTML = fs.readFileSync('homepage.html');
        res.end(homePageHTML)
    }else if(req.url === '/scripts9.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        const scriptFile = fs.readFileSync('scripts9.js');
        res.end(scriptFile)
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end("This page does not exist.")
    }
});

server.listen(3030);