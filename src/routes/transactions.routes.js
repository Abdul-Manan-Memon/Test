const express = require('express');
const router =  express.Router();
const Transactions_Model = require('../Schema/transactions.model');

router.post('/get-transactions', async(req,res)=>{
        const account_id = req.body.account_id;
                      
})