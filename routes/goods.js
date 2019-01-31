const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

/* GET users listing. */
router.get('/search/:name', function(req, res, next) {
  const search = req.params.name;
  //mongo에서 검색하는 쿼리

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
