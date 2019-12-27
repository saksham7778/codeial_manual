const express= require("express");
const router= express.Router();

const homeController=require("../controllers/try_controller");

console.log("try router loaded");

router.get('/newtry', homeController.newtry);

module.exports=router; // so that it is available to index.js