const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        // console.log({
        //     mongo:process.env.mongoDB_URI
        // })
        const con = await mongoose.connect("mongodb+srv://onotis:onotisom123@cluster0.2w3zd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connect @ ${con.connection.host}`)
    }catch(err)
    {
        console.error(`Error: ${err.message}`);
        process.exit();
    }

}
module.exports = connectDB;