const express= require("express");
const router= express.Router();

const userController=require("../controllers/users_controllers");
console.log("users router loaded");

router.get('/profile', userController.profile);

router.get('/sign-up', userController.signup);
router.get('/sign-in', userController.signin);
router.get('/sign_out', userController.sign_out);



router.post('/create', userController.create);
router.post('/create-session', userController.createSession);


module.exports=router; // so that it is available to index.js