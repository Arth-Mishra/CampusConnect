const mongoose = require('mongoose');
const mongoDBUrl = "mongodb+srv://arthmishra1504:CampusConnect24@cluster0.2mjvlhn.mongodb.net/CampusConnect";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoDBUrl);
        // Check if the connection was successful
        if (mongoose.connection.readyState === 1) {
            console.log('Connected to CampusConnect MongoDB DataBase');
        } else {
            console.error('Error connecting to MongoDB');
        }

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
module.exports = connectToMongo;
