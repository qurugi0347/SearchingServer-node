const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const path = require('path');
const val=uuid();
/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(path.join(__dirname+'/../views/search.html'));
  //res.send(path.join(__dirname+'/../views/search.html'));
  //res.send(val);
  res.sendfile(path.join(__dirname+'/../views/search.html'));
});

module.exports = router;
