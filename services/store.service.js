const StoreModel = require("../models/store.schema");

const getStores = async (location = '') => {
  const query = location && location !== 'All' ? { location } : {};
  const stores = await StoreModel.find(query);

  if (!stores || stores.length === 0) {
    const error = new Error('Stores not found');
    error.status = 404;
    throw error;
  }

  return stores;
};

module.exports = { getStores };
