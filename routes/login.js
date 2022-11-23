var express = require('express');
var router = express.Router();
const User = require('../user');
const passport = require('../app')(passport);

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });

router.post('/', function(req, res, next) {
    console.log(req.user);
    next();
  });

router.post('/', passport.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
    console.log(req.user);
    res.redirect('/dashboard');
  });
  

module.exports = router;