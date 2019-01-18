var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Express",
    students: [
      "Zac",
      "Ron",
      "Jim"
    ]
  });
});

module.exports = router;
