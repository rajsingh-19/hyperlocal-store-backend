const ProductModel = require("../models/product.schema");
const StoreModel = require("../models/store.schema");

const getProducts = async (id) => {
    const store = await StoreModel.findById(id);

    if (!store) {
        const error = new Error("Store not found");
        error.status = 404;
        throw error;
    };

    const products = await ProductModel.find({ storeName: store.name });
    
    if (!products || products.length === 0) {
        const error = new Error('Products not found');
        error.status = 404;
        throw error;
    }
    return products;
}

module.exports = { getProducts };
