const mongoose = require('mongoose')
const dotenv = require('dotenv').config();


const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database Conected....");

}

module.exports = connectDB;