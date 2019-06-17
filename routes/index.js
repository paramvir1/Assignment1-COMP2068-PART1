var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/About', (req, res, next) => {
  res.render('About', {});
});

router.get('/Skills', (req, res, next) => {
  res.render('Skills', {});
});

router.get('/Work', (req, res, next) => {
  res.render('Work', {});
});

router.get('/Projects', (req, res, next) => {
  res.render('Projects', {});
});




module.exports = router;
