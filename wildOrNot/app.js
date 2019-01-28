// Dum,Dum,Dum... no generator!!
// First, well, this is an Express app. Maybe we should
// get... Express
const express = require('express');
// Make an express app
let app = express();
// put our helmet on!
const helmet = require('helmet');
// app.use means, add some middleware!
// middelware = any function that has access to req and res
app.use(helmet());

// Set up Mysql Connection
const mysql = require('mysql');
const config = require('./config');
let connection = mysql.createConnection(config.db);
// we have a connection, let's connect!
connection.connect();

// add ejs, so we can render!
app.set('views','views');
app.set('view engine','ejs');
// set up our public folder
app.use(express.static('public'));

app.get('/',(req, res, next)=>{
    const animalQuery = `SELECT * FROM animals;`;
    connection.query(animalQuery,(error,results)=>{
        if(error){throw error}
        // resuilts is an array of all rows in animals.
        // grab a random one
        const rand = Math.floor(Math.random() * results.length);
        res.render('index',{animal: results[rand]});
    });
});
// espn wildcard example:
// http://www.espn.com/nfl/team/_/name/ne/new-england-patriots
    app.get('/nfl/team/_/name/:city/:team')

    
// add a new route to handle the votes
// /vote/wild1
// /vote/domestic/3
// /vote/up/ninja
app.get('/vote/:value/:id', (req, res, next)=>{
    const value = req.params.value;
    const it = req.params.id;
})

console.log("App is listening on port 8363");
app.listen(8363);