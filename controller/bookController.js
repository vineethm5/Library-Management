const asyncHandler  = require("express-async-handler");
const library = require("../model/libModel");
const bookmenu = asyncHandler( async (req,res)=>{
    const books =  await library.find();
    console.log(books);
    res.render("home",{data:books});
})

const addbook = asyncHandler(async(req,res)=>{
const {bookName,bookAuthor,bookPrice} =  req.body;
if(bookName && bookAuthor && bookPrice)
{
    const addingbook = await library.create({
        bookName:bookName,
        bookAuthor:bookAuthor,
        bookPrice:bookPrice
    });
    const allbooks = await library.find();
    res.render("home",{data:allbooks});
}
else
{
    res.status(400).json({message:"all fields are required"});
}
});

const deletebook = asyncHandler(async(req,res)=>{
    const isaval=  await library.findOne({bookName:req.body.bookName});
    if(!isaval)
    {
        res.status(400);
        throw Error({message:"bookNotFound"})
    }
    else{
        const dele =  await library.deleteOne({bookName:req.body.bookName});
        const allbooks = await library.find();
        res.status(200).render("home",{data:allbooks});
    }
})



module.exports = {bookmenu,addbook,deletebook};