const { connection } = require("mongoose");
const User = require("../models/user");
const expressAsyncHandler = require("express-async-handler");
const generateTokens = require("../middlewares/generateToken");

module.exports.createSession = expressAsyncHandler(async (req, res)=>{
    // console.log(req.body);
    if(req.body.password === req.body.confirmpassword)
    {

        const userexists = await User.findOne({email:req.body.email});
        if(userexists)
        {
            res.status(400);
            throw new Error("User already Exists!");
        }
        else{
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                dob: req.body.dob,
                avatar: req.body.avatar,
            })
            if(user)
            {
                res.status(201).json({
                    _id:user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    avatar: user.avatar,
                    dob: user.dob,
                    token: generateTokens(user._id),
                });
            }
            else{
                res.status(400);
                throw new Error("Error Occured while creating account!")
            }
            
        }
    }
    else{
        res.status(400);
        throw  new Error("Incorrect Email or Password")
    }

})
module.exports.joinSession = expressAsyncHandler(async (req, res)=>{
    const x = req.body;
    // console.log(x);
    const user = await User.findOne({email:x.email}); 
    if(user && (await user.matchPassword(x.password)))
    {
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            avatar: user.avatar,
            dob: user.dob,
            token: generateTokens(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid Email or Password!")
    }

})
