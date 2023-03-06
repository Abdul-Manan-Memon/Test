const express = require('express');
const router =  express.Router();
const Transactions_Model = require('../Schema/transactions.model');
router.post('/get-Count', async(req,res)=>{
        const account_id = req.body.account_id;
        let Amount ={
            Total_amount_Bought: 0,
            Total_amount_Sold: 0,
        }
        try{            
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
                    Amount.Total_amount_Bought+=transaction.amount;
                else
                    Amount.Total_amount_Sold+=transaction.amount; 
            })
            res.json(Amount);
        }catch(e){
            throw new Error(e);
        }
});
module.exports = router;