var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/About', (req, res, next) => {
  res.render('About', { age: 20});
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

router.get('/Contact', (req, res, next) => {
  res.render('Contact', {});
});




module.exports = router;
