const route = require('express').Router()
const {TodoController} = require('../controller')
const Authenticate = require('../middleware/authentication').Authenticate
const Authorize = require('../middleware/authorization').Authorize
route.use(Authenticate)
route.post('/', TodoController.create)
route.get('/',TodoController.getAll)
// route.use(Authorize)
route.get('/:id', Authorize, TodoController.getOne)
route.delete('/:id', Authorize, TodoController.delete)
route.put('/:id', Authorize, TodoController.save)
route.patch('/:id', Authorize, TodoController.update)
module.exports = route