const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const StoreModel = mongoose.model("Store", storeSchema);

module.exports = StoreModel;
