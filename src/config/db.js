const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/society-app');
        console.log('Connected to database!');
    } catch (error) {
        console.error('Error in connecting to DB', error.message);
    }
};

module.exports = connectDb;
