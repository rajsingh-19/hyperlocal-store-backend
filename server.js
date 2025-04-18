const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/dbConfig');

dotenv.config();
connectDB();

const app =  express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello");
});


//          wait for the db connection before starting the server
mongoose.connection.once('open', () => {
    console.log('Database Connected');
    //      starting the server after the db connection is established
    app.listen(PORT, () => {
      console.log('Server is runnning on the port', PORT);
    });
});
  
//          error handling for db connection issues
mongoose.connection.on('error', (error) => {
    console.log(`Database Connection Error : ${error}`);
});
