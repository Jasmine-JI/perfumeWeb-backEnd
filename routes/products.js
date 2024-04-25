var express = require('express');
var router = express.Router();
const Product = require("../models/poductsModel");

/*
*取得所有產品
*/
router.get('/', async function (req, res, next) {
console.log(req.query);
  const q = req.query.category !== undefined ? { "category": req.query.category } : {};
  const poducts = await Product.find(q);
  res.status(200).json({
    status:'success',
    poducts
  })
});

/*
* 新增產品
*/
router.post('/', async function (req, res, next) {
  const newPoduct = await Product.create(req.body);
  res.status(200).json({
    status: "success",
    post: newPoduct
  })
});

module.exports = router;