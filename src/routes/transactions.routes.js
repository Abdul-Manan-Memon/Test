const express = require('express');
const router =  express.Router();
const Transactions_Model = require('../Schema/transactions.model');
let Amount ={
    Total_buy_amount: 0,
    Total_Sale_amount: 0,
}

router.post('/get-Count', async(req,res)=>{
        const account_id = req.body.account_id;
        const Transactions = await Transactions_Model.aggregate([
            {
                $match: {account_id}
            },
            {
                $unwind:{
                    path: '$transactions'
                }
            },
        ]);
        Transactions.forEach((result)=>{
            const transaction = result.transactions;
            if(transaction.transaction_code === 'buy')
                Amount.Total_buy_amount+=transaction.amount;
            else
                Amount.Total_Sale_amount+=transaction.amount; 
        })
        res.json(Amount);
});
module.exports = router;