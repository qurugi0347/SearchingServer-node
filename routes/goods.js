const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Goods = require('../models/goods');

/* GET users listing. */
router.get('/search/:name', (req, res, next) => {
  const search = req.params.name;
  if(search=="")
  {
    res.json({result:false,error:"search value is null"});
  }else{
    //mongo에서 검색하는 쿼리
    Goods.find(
      {
        name: { "$regex": search, "$options": "i" }
      }
      ,(err,results)=>{
          res.json(results);
      });
  }


});

/* GET users listing. */
router.get('/', (req, res , next) => {
  //mongo에서 검색하는 쿼리
  Goods.find({},(err, users) => {
    //let userMap = {};
    //users.forEach((user) => {
    //  userMap[user._id] = user;
    //});
    console.log(err);
    res.json(users);
  });
});

module.exports = router;
