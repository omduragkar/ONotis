const express = require('express')
const route = express.Router();

const userRoute = require('./user');
route.get("/", (req, res)=>{
    res.json("Hello")
})
route.use("/auth", userRoute);
module.exports = route;