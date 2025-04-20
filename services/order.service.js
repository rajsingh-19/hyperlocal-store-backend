const OrderModel = require("../models/order.schema");
const ProductModel = require("../models/product.schema");

const createOrder = async ({ name, cart, total }) => {
  if (!name || !Array.isArray(cart) || cart.length === 0 || total === undefined) {
      const error = new Error("Missing required fields");
      error.status = 400;
      throw error;
  };

  const orderCart = [];

  for (const item of cart) {
    const { productId, quantity } = item;

    if (!productId || !quantity) {
      const error = new Error("Each cart item must have productId and quantity");
      error.status = 400;
      throw error;
    };

    const product = await ProductModel.findById(productId);
    if (!product) {
      const error = new Error("Product not found");
      error.status = 404;
      throw error;
    };

    orderCart.push({
      productId: product._id,
      productName: product.name,
      productPrice: product.price,
      quantity
    });
  }

  const newOrder = await OrderModel.create({
    customerName: name,
    cart: orderCart,
    total
  });

  return newOrder;
};

module.exports = { createOrder };
