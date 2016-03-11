var express = require('express');
var util = require('util');
var router = express.Router();


/* GET chat log page. */
router.get('/', function(req, res, next) {
  res.render('chat', { 
	  title: 'Most webchat',
	  login: 'JohnDoe'
 });
});

/* Post new chat message */
router.post('/', function (req, res, next) {
	res.sendStatus(200);
	res.end();
});

module.exports = router;
