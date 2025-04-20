const { createOrder } = require("../services/order.service");

const orderHandler = async (req, res) => {
    const { name, cart, total } = req.body;

    try {
        const order = await createOrder({ name, cart, total });
        return res.status(201).json({ message: "Order placed successfully", data: order });
    } catch (error) {
        console.error(error);
        return res.status(error.status || 500).json({ message: error.message || "Something went wrong" });
    }
};

module.exports = { orderHandler };
