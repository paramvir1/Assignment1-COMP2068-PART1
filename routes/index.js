var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET about page. */
router.get('/About', (req, res, next) => {
  res.render('About', { age: 20});
});
/* GET skills page. */
router.get('/Skills', (req, res, next) => {
  res.render('Skills', {});
});
/* GET work page. */
router.get('/Work', (req, res, next) => {
  res.render('Work', {});
});
/* GET project page. */
router.get('/Projects', (req, res, next) => {
  res.render('Projects', {});
});
/* GET contact page. */
router.get('/Contact', (req, res, next) => {
  res.render('Contact', {});
});




module.exports = router;
