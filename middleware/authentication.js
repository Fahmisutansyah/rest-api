const jwt = require('../helpers/jwt')
module.exports = {
    Authenticate: (req,res,next)=>{
        if (req.headers.hasOwnProperty("token")){
            let decode = jwt.verify(req.headers.token)
            console.log(decode)
            req.decode = decode
            console.log(req.decode)
            next()
        }else{
            res.status(400).json({
                msg: 'Please provide token!'
            })
        }

    }
}