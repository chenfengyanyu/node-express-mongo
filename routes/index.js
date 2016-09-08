var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var temps = [{
  		'name':'jartto',
  		'phone':'18612345678'
	  },{
  		'name':'test',
  		'phone':'12345678910'
	  }]
  res.render('index', { args : temps});
});

module.exports = router;
