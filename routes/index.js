var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
 {
  res.render('index', { title: 'Examen Final' });
});
router.post('/correcto', function(req, res, next)
 {
  res.render('correcto', { title: 'Examen Final' });
});
module.exports = router;
