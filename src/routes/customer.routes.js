const express = require('express');
const router =  express.Router();
const Customer_Model = require('../Schema/customer.model');

router.post('/get-customer',async(req,res)=>{
    const username = req.body.username;
    try{
        const Customer = await Customer_Model.find({username});
        res.json(Customer);
    }catch(e){
        
    }
});
module.exports = router;