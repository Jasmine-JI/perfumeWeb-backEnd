var express = require('express');
var router = express.Router();
const Product = require("../models/poductsModel");

/*
*取得所有產品
*/
router.get('/', async function (req, res, next) {
    // console.log(req.query);
    const q = req.query.category !== undefined ? { "category": req.query.category } : {};
    const poducts = await Product.find(q);
    res.status(200).json({
        status: 'success',
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
        poduct: newPoduct
    })
});

/*
* 刪除全部產品
*/
router.delete('/', async function (req, res, next) {
    const poducts = await Product.deleteMany();
    res.status(200).json({
        status: "success",
    })
});

/*
* 刪除單筆產品
*/
router.delete('/:id', async function (req, res, next) {
    const id = req.params.id !== undefined ? { '_id': req.params.id } : {};
    const poduct = await Product.findOneAndDelete(id);
    res.status(200).json({
        status: "success",
        poduct
    })
});

/*
* 編輯單筆產品
*/
router.patch('/:id', async function (req, res, next) {
    const id = req.params.id !== undefined ? { '_id': req.params.id } : {};
    const poduct = await Product.findOneAndUpdate(id,req.body);
    res.status(200).json({
        status: "success",
    })
});

module.exports = router;