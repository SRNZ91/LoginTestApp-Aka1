var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
    res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
    and your session expires in ${req.session.cookie.maxAge} 
    milliseconds.<br><br>
    <a href="/logout">Log Out</a><br><br>
    <a href="/secret">Members Only</a>`);
  });

module.exports = router;