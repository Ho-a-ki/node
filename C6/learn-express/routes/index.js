var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    isLog : true
   });
});

// app.use처럼 하나에 미들웨어를 여러개 장착할 수도 있음.
// router.get('/, middleware1, middleware2, middleware3 );

module.exports = router;
