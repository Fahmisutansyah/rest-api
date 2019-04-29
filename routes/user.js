const route = require('express').Router()
const {UserController} = require('../controller')

// route.use(express.json());
// route.use(express.urlencoded({ extended: true }));

route.get('/', UserController.getAll)
route.get('/:id', UserController.getByPk)
route.post('/', UserController.create)
route.delete('/:id', UserController.delete)
route.put('/:id', UserController.update)

module.exports = route