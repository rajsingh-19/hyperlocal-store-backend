const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app =  express();
app.use(cors());
app.use(express.json());

const PORT = 5000 || process.env.PORT;


app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Server Established");
});
