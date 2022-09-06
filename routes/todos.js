const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const apiController = require('../controllers/api') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

//router.get('/apiRefresh', apiController.refreshApi)

module.exports = router