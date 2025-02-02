const asyncHandler =  require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");



const signup = asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    isfound =  await User.findOne({username:username});
    console.log(isfound);
    if(!isfound)    
    {
        const hasedpass= await bcrypt.hash(password,10);
        const create_user= await User.create({
            username:username,
            useremail:email,
            password:hasedpass
        });
        if(create_user)
        {
            res.status(201).render("index",{message:"User Created Successfully"});
        }
    }
    else
    {
        console.log("User Data Exits");
    }
    

});

module.exports={signup};