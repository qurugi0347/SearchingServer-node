const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const val=uuid();
/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(val);
});

module.exports = router;
