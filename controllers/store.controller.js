const { getStores } = require("../services/store.service");

const getStoreHandler = async (req, res) => {
  try {
    const location = req.query.location || '';
    const stores = await getStores(location);

    return res.status(200).json({ message: 'Stores retrieved successfully', data: stores });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({ message: error.message || 'An error occurred' });
  }
};

module.exports = { getStoreHandler };
