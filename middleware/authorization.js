const {Todo} = require('../models')
module.exports = {
    Authorize: (req,res,next)=>{
        Todo.findByPk(Number(req.params.id))
        .then(todo=>{
            // console.log(todo)
            if (!todo)res.status(404).json({
                msg: 'Data not found'
            })
            else if (todo.userId === req.decode.id)next()
            else res.status(401).json({
                msg: 'Not authorized'
            })
        })
    }
}