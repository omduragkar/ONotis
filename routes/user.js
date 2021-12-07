const express = require('express')
const route = express.Router();
const userController = require("../controllers/usercontroller");
route.post("/user/login", userController.joinSession);
route.post("/user/register", userController.createSession);
module.exports = route;