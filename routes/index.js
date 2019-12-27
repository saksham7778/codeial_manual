const express= require("express");

const router= express.Router();
const homeController=require("../controllers/home_controller");

console.log("index router loaded");

router.get('/', homeController.home);
router.use('/users',require('./users'));
router.use('/',require('./try'));

module.exports=router; // so that it is available to index.js