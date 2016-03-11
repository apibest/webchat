var express = require('express');
var util = require('util');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Most webchat' });
});

router.post('/', function (req, res, next) {
	var login = req.body.login;
	res.redirect('/chat');
});

module.exports = router;
