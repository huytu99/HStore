const jwt = require('jsonwebtoken');

const verifyAccessToken = (req, res, next) => {
    const accessToken = req.header('Auth-token')

    if(!accessToken) return res.status(400)

    try {
        const checkAccessToken = jwt.verify(accessToken ,"mk") // kiểm tra token
        req.user = checkAccessToken //lưu token lại để có thể kiểm tra 
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).send('Token không hợp lệ')
    }
} 

module.exports = verifyAccessToken;