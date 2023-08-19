const Router = require("express").Router()
const userControler = require('../controllers/userController')
Router.post("/register",userControler.register)
Router.post("/login",userControler.login )
module.exports = Router