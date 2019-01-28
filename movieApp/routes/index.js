var express = require('express');
var router = express.Router();

const mysql = require('mysql');
// Our node module, it's in gitignore
const config = require('../config');
const connection = mysql.createConnection(config.db);
connection.connect();
const bcrypt = require('bcrypt-nodejs');

const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${config.apiKey}`;
// console.log(nowPlayingUrl)


// HOW we would do it in front-end
// wont work now!
// $.getJSON(nowPlayingUrl,(data)=>{})
// $.ajax(nowPlayingUrl,{method:'get'})
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl,(error,response,body)=>{
    console.log(nowPlayingUrl)
    if(error){throw error;}
    // console.log(typeof(body));
    const parsedData = JSON.parse(body);
    // console.log(parsedData);
    // we now have the data from movieApi.
    // lets send it over to the view/EJS!
    res.render('now_playing',{
      parsedData: parsedData.results,
      imageBaseUrl: imageBaseUrl
    });
    // res.json(parsedData)
  });
  // res.render('index', { title: 'Express' });
});

// MAKE A NEW ROUTE CALLED /search
// if the user comes to it, render search.ejs
// search.ejs should be an input box with a form tag
// around it, and a button. That's all
router.get('/search',(req,res)=>{
  res.render('search');
});

router.post('/search/movie',(req, res)=>{
  // submitted data from forms comes in the req object
  // querystring data, is in req.query
  // posted data, is in req.body
  const movieTitle = req.body.movieTitle;
  // in php
  // $_POST['movieTitle']
  // in ruby
  // :params['movieTitle']
  // Python/ Flask
  // request.form['movieTitle']

  // res.json(req.body);
  const searchUrl = `${apiBaseUrl}/search/movie?query=${movieTitle}&api_key=${config.apiKey}`;
  request.get(searchUrl,(error,response,body)=>{
    const parsedData = JSON.parse(body);
    res.render('now_playing',{
      imageBaseUrl,
      parsedData: parsedData.results
    })
  })
});

router.get('/login',(req, res)=>{
  res.render('login')
})

router.post('/loginProcess',(req, res)=>{
  const insertQuery = `INSERT into users (email,password)
      VALUES
    (?,?)`
    const x = bcrypt.hashSync("req.body.password");    
  connection.query(insertQuery,[req.body.email,x],(error, results)=>{
    
    if(error){
      throw error;
    }else{
      res.json(x)
    }
  })

})

module.exports = router;



const CARCOLOR = Symbol();
const CARMAKE = Symbol();
class Car{
  constructor(color,make){
    console.log(color)
    this[CARCOLOR] = color;
    this[CARMAKE] = make;
  }
  get color(){
    console.log("Getting color");
    console.log(this)
    return this[CARCOLOR];
  }
}
let myCar = new Car('Red','Chevy');
console.log(myCar.color)