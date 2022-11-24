var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var User = require('../user');

// Configure Sessions Middleware
router.use(session({
  secret: 'kwqheKJJS!(@!@#123811kjqwe1(',
  resave: false,
  saveUninitialized: true,
  //cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Configure More Middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(passport.initialize());
router.use(passport.session());

// Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });

router.post('/', function(req, res, next) {
    console.log(req.user);
    next();
  });

router.post('/', passport.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
    res.redirect('/dashboard');
  });
  

module.exports = router;