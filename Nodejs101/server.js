// 1. Make a new folder called myNPM
// 2. Create a package.json with npm init
// 3. Install express
// 4. create a .gitnore file that ignores node_modules

const http = require('http');
console.log(http);

// createServer takes 1 argument
// a function to run when someone makes
// an HTTP connection to this program
const server = http.createServer((req, res)=>{
    console.log("Someone hit our HTTP server");
    res.end('<h1>I went to FootLoose!</h1>');
});


server.listen(3900)
