const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    storeName: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
