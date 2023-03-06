const GenerateSchema = require('generate-schema');
const  mongoose  = require('mongoose');
const json_data = require('./JSON/Customer.json');

const customer = GenerateSchema.mongoose(json_data);

module.exports = mongoose.model('customer', customer);