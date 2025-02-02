const express = require('express');
const router =  express.Router();
const {bookmenu,addbook,deletebook,loginsign} = require("../controller/bookController");
const {signup} = require("../controller/userController");

router.get("/",bookmenu);
router.post("/addbook",addbook);
router.post("/delete",deletebook);
router.get("/loginsign",loginsign);
router.post("/signup",signup);


module.exports=router;