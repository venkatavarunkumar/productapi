// const userservice=require("./handler")
// module.exports={userservice}
const Joi = require('joi');
const schema = Joi.object({
    FirstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    LastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    Age:Joi.number().integer(),
    Password: Joi.string().min(100)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

        
module.exports= schema
    

