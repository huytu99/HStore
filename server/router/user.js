const express = require('express');
const router = express.Router();
const AccountModel = require('../models/Account')

// lay thong tin user tu DB

router.get('/',  (req, res) => {
    AccountModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('Loi server')
    })
})

// update password trong DB

router.put('/update/:_id', async (req, res) => {
    const id = req.params._id
    const newPassword = req.body.newPassword

    AccountModel.findByIdAndUpdate(id, {
        password: newPassword
    })
    .then(data=> {
        if(!data){
            res.json('Username khong ton tai')
        }else {        
            res.json(`Updated`)
        }
    }).catch(err=>{
        res.status(500).json("ERROR")
    })
})

// xoa' user trong DB

router.delete('/admin/delete/:_id', async(req, res, next) => {
    const id = req.params._id
    AccountModel.findOne({id})
        .then(data=>{
            if(!data){
                res.json({
                    message:'User khong ton tai'
                })
            }else {
                return AccountModel.deleteOne({
                    _id: id
                })
        .then(data=>{
            res.json('Deleted')
                })
        .catch(err=>{
            res.status(500).json("ERROR")
                })
        }})

})



module.exports = router