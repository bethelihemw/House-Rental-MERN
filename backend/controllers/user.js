const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSignUp = async(req,res) =>{
    //get the required feilds fron the body
    const {email,password} = req.body
    // make sure the feilds are not empty
    if(!email || !password){
        return res.json({message:"Required feilds cant be empty"})
    }
    //check if a user already exist by checking the email
    let user = await User.findOne({email})
    //if user exits throw and error
    if(user){
        return res.status(400).json({error: "User already exist"})
    }
    
    //but first we have to hash the password so that it is not in plain text
    const hashedPassword = await bcrypt.hash(password, 10)
    //create new user using the new hashed pasword
    const newUser = await User.create({
        email,
        password: hashedPassword
    })
    //give kit a token with a secret key
    let token = jwt.sign({email,id:newUser},process.env.SECRET_KEY)
    //return the tken and the new user info
    return res.status(200).json({token,user: newUser})
    // return res.status(201).json({message: "User created successfully"})
}

const userLogin = async(req,res) =>{
    //get the required feilds fron the body
    const {email,password} = req.body
    // make sure the feilds are not empty
    if(!email || !password){
        return res.json({message:"Required feilds cant be empty"})
    }
    let user = await User.findOne({email})
    //if user exits throw and error
    if(user && await bcrypt.compare(password, user.password)){
        let token = jwt.sign({email,id:user},process.env.SECRET_KEY)
        return res.status(200).json({token,user})
        } 
    else{
        return res.status(400).json({error: "Invalid Credentials"})
       
    }
}

const getUser = async(req,res) =>{
    const user= await User.findById(req.params.id)
    return res.json({
        user
    })
}

module.exports={userSignUp, userLogin, getUser}