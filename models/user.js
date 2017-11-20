const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// User Model Definition
const userSchema = new Schema({
    imei: { type: String, required: true },
    appID: { type: String, required: true },
    appName: { type: String, required: true },
});

// Export Module/Schema
module.exports = mongoose.model('User', userSchema);