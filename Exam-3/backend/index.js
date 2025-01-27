const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
    connectDB();
})
