const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
// var bodyParser = require("body-parser");
// const path = require('path');
const routes= require('./routes/index');

dotenv.config();
var cors = require('cors');
app.use(cors());
app.use(express.json());
connectDB();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

app.use("/", routes);
// if(process.env.NODE_ENV === "production")
// {
//     app.use(express.static(path.join(`${__dirname}/client/build`)));
//     app.get('/*', (req, res)=>{
//         res.sendFile(path.join(`${__dirname}/client/build/index.html`));
//     });
// }
// app.use(notfound);
// app.use(errorHandler);
const port = process.env.PORT || 4000 ;
// const host = '0.0.0.0';

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