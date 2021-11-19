const Joi = require('joi');

// Validate Register 
const validateRegister = function (data) {
    const schema = Joi.object({
        name: Joi.string()
            .min(4)
            .required()
            .messages({
                'string.base': `"a" should be a type of 'text'`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
              }),
        username: Joi.string()
            .min(5)
            .required()
            .messages({
                'string.min': `Username phải có ít nhất 5 ký tự`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
              }),
        password: Joi.string().label('password')
            .min(6)
            .required()
            .messages({
                'string.min': `Password phải có ít nhất 6 ký tự`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
              }),
        repeatPassword:Joi.string()
            .valid(Joi.ref('password'))
            .required()
            .strict()
            .messages({
                'any.only': 'Password không trùng khớp' ,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
              }),
        phone: Joi.string()
            .length(10)
            .pattern(/^[0-9]+$/)
            .required()
            .messages({
                'string.base': `Nhập sai số điện thoại`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
              }),
        email: Joi.string()
            .email()
            .messages({
                'string.base': `Định dạng email không đúng`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
              }),
        address: Joi.string()
            .messages({
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
          }),
    })
    return schema.validate(data)
}
module.exports.validateRegister = validateRegister

//  Validate Login
const validateLogin = function (data) {
    const schema = Joi.object({
        username: Joi.string()
            .min(5)
            .required() 
            .messages({                
                'string.min': `Username phải có ít nhất 5 ký tự`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
          }),
        password: Joi.string()
            .min(6)
            .required()
            .messages({
                'string.min': `Password phải có ít nhất 6 ký tự`,
                'string.empty': `Vui lòng điền đẩy đủ thông tin`,
          }),
    })
    return schema.validate(data)
}
module.exports.validateLogin = validateLogin