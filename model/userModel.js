const mongoose =  require("mongoose");

const userschema =  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    password:{
    type:String,
    required:true
    }
},
{
    timestamp:true
});

module.exports =  mongoose.model("User",userschema,"users"); // Last parameter is mappping to the already existing table in mongo db