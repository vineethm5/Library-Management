const mongoose =  require("mongoose");


const libSchema = mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true
    },
    bookPrice:{
        type:String,
        require
    }

},
{
    timestamp:true
}

);

module.exports = mongoose.model("library",libSchema);
