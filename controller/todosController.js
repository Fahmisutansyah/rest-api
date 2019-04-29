const {Todo, User} = require('../models')
class TodoController{
    static create(req,res){
        console.log(req.decode)
        Todo.create({
            title: req.body.title,
            description : req.body.description,
            userId: req.decode.id
        })
        .then(created=>{
            res.status(201).json(created)
        })
        .catch(err=>{
            res.status(500).json({
                msg: "Internal Server Error"
            })
        })
    }
    static getAll(req,res){
        User.findOne({where: {id : req.decode.id}, include: Todo})
        // Todo.findAll({order: [["id", "ASC"]]})
        .then(user=>{
            res.status(200).json(user.Todos)
        })
        .catch(err=>{
            res.status(500).json({
                msg: "Internal Server Error"
            })
        })
    }

    static getOne(req,res){
        console.log('bambang suraprajaaaa')
        Todo.findByPk(req.params.id)
        .then(todo=>{
            
            res.status(200).json(todo)
        })
        .catch(err=>{
            res.status(500).json({
                msg: "Internal Server Error"
            })
        })
    }
    static delete(req,res){
        Todo.findByPk(req.params.id)
        .then(todo=>{
            return todo.destroy()
        })
        .then(deleted=>{
            res.status(200).json(deleted)
        })
        .catch(err=>{
            res.status(500).json({
                msg: "Internal Server Error"
            })
        })
    }
    static save(req,res){
        console.log('hhaahahahahahahh')
        Todo.findByPk(req.params.id)
        .then(todo=>{
            if (todo){
                let keys = Object.keys(req.body)
                keys.forEach(element=>{
                    todo[element] = req.body[element]
                })
                return todo.save()
            }else{
                res.status(404).json({
                    msg:'data not found'
                })
            }
        })
        .then(saved=>{
            res.status(200).json(saved)
        })
        .catch(err=>{
            res.status(500).json({
                msg: "Internal Server Error"
            })
        })
    }
    static update(req,res){
        let values = {}
        for(key in req.body){
            values[key] = req.body[key]
        }
        Todo.findByPk(req.params.id)
        .then(todo=>{
            return todo.update(values)
        })
        .then(updated=>{
            res.status(200).json(updated)
        })
        .catch(err=>{
            res.status(500).json({
                msg: 'Internal Server Error'
            })
        })
    }
}

module.exports = TodoController