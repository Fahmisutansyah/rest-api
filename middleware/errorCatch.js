module.exports = ({res,req,err})=>{
    res.status(500).json({
        msg: err
    })
}