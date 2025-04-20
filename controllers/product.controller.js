const { getProducts } = require("../services/product.service");

const productHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const products = await getProducts(id);
        return res.status(200).json({ message: "Products fetched successfully", data: products });
    } catch (error) {
        console.error(error);
        return res.status(error.status || 500).json({ message: error.message || 'An error occurred' });
    }
}

module.exports = { productHandler };
