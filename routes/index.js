const express = require('express')
const route = express.Router();
const notesRoute = require('./notesapi');
const userRoute = require('./user');

route.use("/auth", userRoute);
route.use('/api/notes', notesRoute);
route.get("/", (req, res)=>{
    res.send("Hello")
})
module.exports = route;