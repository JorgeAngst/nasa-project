const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => console.log('MongoDB connection ready 1'));

mongoose.connection.on('error', (err) => logError(err));

async function mongoConnect() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connection ready 2');
    } catch (error) {
        console.error('MongoDB conection status:', error);    }
}

async function mongoDisconnect() {
    try {
        await mongoose.disconnect();
        console.log('Disconneted from MongoDB');
    } catch (error) {
        console.error('Error disconnecting from MongoDB:', error);
    }
}

module.exports = {
    mongoConnect,
    mongoDisconnect
};