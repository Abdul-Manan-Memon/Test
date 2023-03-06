const GenerateSchema = require('generate-schema');
const  mongoose  = require('mongoose');
const json_data = require('./JSON/Transactions.json');

const transactions = GenerateSchema.mongoose(json_data);

module.exports = mongoose.model('transactions', transactions);