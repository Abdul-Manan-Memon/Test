const GenerateSchema = require('generate-schema');
const  mongoose  = require('mongoose');
const json_data = require('./JSON/Account.json');

const account = GenerateSchema.mongoose(json_data);

module.exports = mongoose.model('Accounts', account);