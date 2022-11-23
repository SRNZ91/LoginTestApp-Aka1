var express = require('express');
var router = express.Router();
const User = require('../user');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });

router.post('/', {credentials: 'include'}, function(req, res, next) {
    console.log(req.user);
    next();
  });

router.post('/', User.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
    console.log(req.user);
    res.redirect('/dashboard');
  });
  

module.exports = router;