const express = require("express");
const router = express.Router();

const BillModel = require("../models/Bill")

router.post('/bill', async function(req, res){

    const newbill = new BillModel();
    newbill.name = req.body.name 
    newbill.address = req.body.address 
    newbill.phone = req.body.phone 
    newbill.email = req.body.email
    newbill.title = req.body.title
    newbill.price = req.body.price
    newbill.image = req.body.image
    newbill.quantity = req.body.quantity
    try{
        const Bill = await newbill.save()
        res.send(Bill);
        
    }catch(err){
        res.status(400)
        res.send(err);
        console.log(err)
    }
})

module.exports = router;