require("dotenv").config();
const bodyParser = require("body-parser");
const express  = require("express");
const dbConnect = require("./config/bookConfig");
const app = express();
app.set('view engine','ejs');

dbConnect();

const PORT =process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",require("./router/bookRouter"));
app.use("/user",require("./router/userRouter"));

app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`server is running on ${PORT}`);
    }
})