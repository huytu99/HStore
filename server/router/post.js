const express = require('express');
const router = express.Router();
const AccountModel = require('../models/Account')
const AccessoriesModel = require('../models/Product/Accessories')

// them du lieu vao DB
router.post('/', async (req, res) => {
    const { username, name, email, phone, address} = req.body

    if(!username)
    return res
    .status(400)
    .json({success: false, message: 'Username is required'})
    try{
        const newUser = new AccountModel({
            name,
            address,
            email,
            phone,
            title,
            quantity,
            total,
            createdAt
        })
        await newUser.save()

        res.json({success: true, message: 'Happy', user: newUser})
    } catch(error){
        console.log(error)
        res.status(500).json({success: false, message: 'Error'})
    }
})


// update du lieu trong DB
router.put('/', (req, res) => {
    res.json('Put')
})

// xoa' du lieu trong DB
router.delete('/', (req, res) => {
    res.json('Delete')
})

router.get('/product/accessories',  (req, res) => {
    AccessoriesModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('Loi server')
    })
})
module.exports = router