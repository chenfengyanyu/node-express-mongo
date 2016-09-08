var express = require('express');
// var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var User = require('../db/db');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
	User.find({},function(err,datas){
		 if (err) {
		    console.log(err);
		  } else {
		    res.render('index', { args : datas});
		  }
	})
});

router.post('/add', urlencodedParser , function(req, res, next) {
	var theOne = new User({
		name:req.body.name,
		phone:req.body.phone
	});
	theOne.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('add success!');
	    res.redirect('/');
	  }
	});
});

router.get('/delete', function(req, res, next) {
	User.remove({_id:req.query.id},function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('delete success!');
	    res.redirect('/');
	  }
	});
});

module.exports = router;
