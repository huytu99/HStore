const express = require('express')
const router = express.Router()
const AccountModel = require('../models/Account')
const argon2 = require('argon2')

const bcrypt = require("bcryptjs")
const {validateRegister, validateLogin} = require("../auth/validation")


router.post('/register', async(req, res) => {
    const username = req.body.username
    const userExist = await AccountModel.findOne({username: username});
    if(userExist) return res.status(400).send(("Username đã tồn tại"))

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const{ error } = validateRegister(req.body);
     if(error) return res.status(400).send(error.details[0].message)

    const newAccount = new AccountModel();
    
    newAccount.username = req.body.username
    newAccount.password = hashPassword
    newAccount.repeatPassword=hashPassword
    newAccount.name = req.body.name
    newAccount.email = req.body.email
    newAccount.phone=req.body.phone    
    newAccount.address = req.body.address
    try{
        const User = await newAccount.save()
        res
        .status(200)
        .send(User);
    }catch(err){
        res.status(500)
        res.send(err);
        console.log("error")
    }
})
router.post('/login', async function(req, res){
    // Validate user
    const{ error } = validateLogin(req.body);
     if(error) return res.status(400).send(error.details[0].message)
      // Kiểm tra email
    const userLogin = await AccountModel.findOne({username: req.body.username});
    if(!userLogin) return res.status(400).send(("Không tìm thấy Username"))

     // Kiểm tra password
    const passLogin = await bcrypt.compare(req.body.password, userLogin.password);
    if(!passLogin) return res.status(400).send(("Mật khẩu không hợp lệ"))

     //res.send("Bạn đã đăng nhập thành công")
     
  // Ký và tạo token

     res.send({userLogin})
})


module.exports = router
