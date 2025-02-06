const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    console.log("Welcome to bakend of project");

})




const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server Runing on port ${PORT}`);
})
connectDB();