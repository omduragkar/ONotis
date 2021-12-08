const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        trim:true,
        required: true
    },
    avatar:
    {
        type:String,
        required: true,
        default:"om"
    },
    dob:{
        type:String,
        required: true,
    }

},{
    timestamps: true
})
userSchema.pre('save', async function(next){
    if(!this.isModified('password'))
    {
        next();
    }
    else{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);

}
const User = mongoose.model("User", userSchema);
module.exports = User;