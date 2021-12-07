const express = require('express')
const route = express.Router();

const userRoute = require('./user');
route.use("/auth", userRoute);
module.exports = route;