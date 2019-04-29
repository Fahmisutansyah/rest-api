const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('../helpers/jwt')



class UserController {
    static test(req,res){
        res.status(200).json({
            msg: "connected"
        })
    }

    static login(req,res){
        User.findOne({where:{username: req.body.username}})
        .then(user=>{
            if (!user)res.status(404).json({
                msg: 'Invalid username/password'
            })
            else{
                let check = bcrypt.compareSync(req.body.password, user.password)
                if (check){
                    let token = jwt.generateJwt({id: user.id, username: user.username})
                    console.log(token)
                    res.status(200).json({
                        token
                    })
                } 
                else{
                    res.status(404).json({
                        msg: 'Invalid username/password'
                    })
                }
            }
        })
    }
    static getAll(req,res){
        User.findAll({order: [['id', 'ASC']]})
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(err=>{

            res.status(500).json({
                msg: err
            })
        })
    }
    static getByPk(req,res){
        User.findByPk(req.params.id)
        .then(user=>{
            if (user)res.status(200).json(user)
            else res.status(404).json({})
        })
        .catch(err=>{
            res.status(500).json({
                msg: err
            })
        })
    }
    static create(req,res){
        User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(user=>{
            res.status(201).json(user)
        })
        .catch(err=>{
            // error(req,res,err)
            res.status(500).json({
                msg: err
            })
        })
    }
    static delete(req,res){
        User.findByPk(req.params.id)
        .then(user=>{
            return user.destroy()
        })
        .then(deleted=>{
            res.status(200).json(deleted)
        })
        .catch(err=>{
            res.status(500).json({
                msg: err
            })
        })
    }
    static update(req,res){
        User.findByPk(req.params.id)
        .then(user=>{
            let keys = Object.keys(req.body)
            keys.forEach(element=>{
                user[element] = req.body[element]
            })
            return user.save()
        })
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(err=>{
            res.status(500).json({
                msg: err
            })
        })
    }
}

module.exports = UserController