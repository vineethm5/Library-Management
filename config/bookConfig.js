const mongoose = require('mongoose');

const dbConnect = async()=>{
    try{
        dbmongoose = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected successfully");
    }

    catch(err)
    {
        console.log(err);
    }
}

module.exports= dbConnect;