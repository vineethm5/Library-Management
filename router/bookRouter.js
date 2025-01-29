const express = require('express');
const router =  express.Router();
const {bookmenu,addbook,deletebook} = require("../controller/bookController");

router.get("/",bookmenu);
router.post("/addbook",addbook);
router.post("/delete",deletebook);


module.exports=router;