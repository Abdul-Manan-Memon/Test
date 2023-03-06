require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const customer_route = require('./routes/customer.routes'); 
const transactions_route = require('./routes/transactions.routes'); 

//Database Connection
mongoose.connect(process.env.URL);
const conn =mongoose.connection;
conn.on('open',()=>{console.log("Database Connected")});


const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use('/customer',customer_route);
app.use('/transactions',transactions_route);

app.listen(port, () => {
    console.log('Server Started at PORT ' + port);
});