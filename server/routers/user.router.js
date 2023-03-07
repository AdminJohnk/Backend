const express = require('express');
const userRouter = express.Router()
const { RegisterUser_co } = require('../controllers/user.controllers')

// Thêm người dùng
userRouter.post('/' ,RegisterUser_co)


module.exports = userRouter;












