var express = require('express');
var router = express.Router();

/* GET secret page. */
router.get('/', function(req, res, next) {
    res.render('secret-page', { title: 'Express' });
  });

module.exports = router;