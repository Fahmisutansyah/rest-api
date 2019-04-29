const jwt = require('jsonwebtoken')



module.exports = {
    generateJwt : (obj)=>{
        return jwt.sign(obj,process.env.JWT_SECRET)
    },
    verify: (token)=>{
        return jwt.verify(token,process.env.JWT_SECRET)
    }
}