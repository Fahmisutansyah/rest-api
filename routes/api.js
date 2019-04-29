const route = require('express').Router()
const { UserController } = require('../controller')
const Authenticate = require('../middleware/authentication').Authenticate
// route.use(express.json());
// route.use(express.urlencoded({ extended: true }));
route.get('/test', require('../controller/index').UserController.test)

route.use('/users', require('./user'))
route.post('/register', UserController.create)
route.post('/login',UserController.login)

route.use('/todos', require('./todos'))


module.exports = route