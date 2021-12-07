const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
// var bodyParser = require("body-parser");
const errorHandler =  require('./middlewares/generror');
const notfound = require("./middlewares/routeerror");
const path = require('path');

dotenv.config();
connectDB();
var cors = require('cors');
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

const routes= require('./routes/index');
app.use("/", routes);
if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(`${__dirname}/client/build`)));
    app.get('/*', (req, res)=>{
        res.sendFile(path.join(`${__dirname}/client/build/index.html`));
    });
}
app.use(notfound);
app.use(errorHandler);
const port = process.env.PORT || 3000 ;


app.listen(port, (err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log(`Server Started at port ${port}`);
    }
})