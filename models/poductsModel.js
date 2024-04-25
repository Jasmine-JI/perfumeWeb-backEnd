const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, '請填寫商品分類']
        },
        id: {
            type: String,
            default: "",
            select: false
        },
        image: {
            type: String,
            default: "",
            required: [true, '請上傳商品圖片']
        },
        is_enabled: {
            type: Number,
            default: 0,
        },
        origin_price: {
            type: String,
            required: [true, '請填寫商品定價']
        },
        price: {
            type: String,
            required: [true, '請填寫商品售價']
        },
        title: {
            type: String,
            required: [true, '請填寫商品名稱']
        },
        unit: {
            type: String,
            required: [true, '請填寫商品規格']
        }
    }
);
const Product = mongoose.model('product', productSchema);

module.exports = Product;