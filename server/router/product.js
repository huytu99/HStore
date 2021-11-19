const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product')
const AccessoriesModel = require('../models/Product/Accessories')
const ClothesModel = require('../models/Product/Clothes')
const HatModel = require('../models/Product/Hat')
const ShoesModel = require('../models/Product/Shoes')


router.get('/product',  (req, res) => {
    ProductModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('Loi server')
    })
})

router.post('/product/home', async (req, res) => {
    const { id, image, title, price, describe} = req.body
    
    ProductModel.findOne({
            id: id,
        })
        .then(data => {
            if(data){    
                res
                .status(400)
                .json({status: 'id sản phẩm đã tồn tại'})
            }else{
            return ProductModel.create({
                id: id,
                image: image,
                title: title,
                price: price,
                describe: describe
            })
        }
    })
    .then(data=>{
        res.json({ 
            status: 'SUCCESS',
            message:'Đã thêm sản phẩm',
            })
    })
    .catch(err=>{
        res.status(500).json('Thêm sản phẩm thất bại')
    })
})

router.post('/product/accessories', async (req, res) => {
    const { id, image, title, price, describe} = req.body
    
    AccessoriesModel.findOne({
            id: id,
        })
        .then(data => {
            if(data){    
                res
                .status(400)
                .json({status: 'id sản phẩm đã tồn tại'})
            }else{
            return AccessoriesModel.create({
                id: id,
                image: image,
                title: title,
                price: price,
                describe: describe
            })
        }
    })
    .then(data=>{
        res.json({ 
            status: 'SUCCESS',
            message:'Đã thêm sản phẩm',
            })
    })
    .catch(err=>{
        res.status(500).json('Thêm sản phẩm thất bại')
    })
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

router.post('/product/hat', async (req, res) => {
    const { id, image, title, price, describe} = req.body
    
    HatModel.findOne({
            id: id,
        })
        .then(data => {
            if(data){    
                res
                .status(400)
                .json({status: 'id sản phẩm đã tồn tại'})
            }else{
            return HatModel.create({
                id: id,
                image: image,
                title: title,
                price: price,
                describe: describe
            })
        }
    })
    .then(data=>{
        res.json({ 
            status: 'SUCCESS',
            message:'Đã thêm sản phẩm',
            })
    })
    .catch(err=>{
        res.status(500).json('Thêm sản phẩm thất bại')
    })
})

router.get('/product/hat',  (req, res) => {
    HatModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('Loi server')
    })
})

router.post('/product/clothes', async (req, res) => {
    const { id, image, title, price, describe} = req.body
    
    ClothesModel.findOne({
            id: id,
        })
        .then(data => {
            if(data){    
                res
                .status(400)
                .json({status: 'id sản phẩm đã tồn tại'})
            }else{
            return ClothesModel.create({
                id: id,
                image: image,
                title: title,
                price: price,
                describe: describe
            })
        }
    })
    .then(data=>{
        res.json({ 
            status: 'SUCCESS',
            message:'Đã thêm sản phẩm',
            })
    })
    .catch(err=>{
        res.status(500).json('Thêm sản phẩm thất bại')
    })
})

router.get('/product/clothes',  (req, res) => {
    ClothesModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('Loi server')
    })
})


router.post('/product/shoes', async (req, res) => {
    const { id, image, title, price, describe} = req.body
    
    ShoesModel.findOne({
            id: id,
        })
        .then(data => {
            if(data){    
                res
                .status(400)
                .json({status: 'id sản phẩm đã tồn tại'})
            }else{
            return ShoesModel.create({
                id: id,
                image: image,
                title: title,
                price: price,
                describe: describe
            })
        }
    })
    .then(data=>{
        res.json({ 
            status: 'SUCCESS',
            message:'Đã thêm sản phẩm',
            })
    })
    .catch(err=>{
        res.status(500).json('Thêm sản phẩm thất bại')
    })
})

router.get('/product/shoes',  (req, res) => {
    ShoesModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('Loi server')
    })
})

router.post('/product/shoes/update/:_id', async (req, res) => {
    const id = req.params._id
    const describe = req.body.describe

    ShoesModel.findByIdAndUpdate(id, {
        describe: describe
    })
    .then(data=> {
        if(!data){
            res.json('San pham khong ton tai')
        }else {        
            res.json(`Updated`)
        }
    }).catch(err=>{
        res.status(500).json("ERROR")
    })
})

module.exports = router