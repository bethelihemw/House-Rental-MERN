const express = require("express")
const {userSignUp, userLogin, getUser} = require("../controllers/user")
const router = express.Router();

router.post("/signUp", userSignUp); //get all the house list
router.post("/login", userLogin); //post a user
router.get("/user/:id", getUser); //get a user by id



module.exports=router