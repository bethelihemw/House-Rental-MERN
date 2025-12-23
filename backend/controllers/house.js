const Houses = require("../model/house")

//get all houses
const getHouses = async(req,res) =>{
    const houses= await Houses.find()
    return res.json(houses)
}

//get one house by id
const getaHouse = async(req,res) =>{
    const house = await Houses.findById(req.params.id)
    res.json(house)
}

// add houses
const addHouses = async(req,res) =>{
    const {title, price, location, description} = req.body

    if(!title || !price || !location || !description ){
        res.json({message: "Required fields can't be empty"})
    }
    const newHouse = await Houses.create({
        title, price, location, description
    })
    return res.json(newHouse)
}

//edit a houses by id
const editHouse = async(req,res) =>{
    const {title, price, location, description} = req.body
    let house = await Houses.findById(req.params.id)
    try{
        if(house){
            await Houses.findByIdAndUpdate(req.params.id, req.body, {new:true}) 
            res.json({title, price, location,  description})
        }
    }
    catch(err){
        return res.status(404).json({message:"error"})
    }
    
}

//delete a house by id
const deleteHouse = async(req,res) =>{
    // try{
    //     await Houses.deleteOne({_id:req.params.id})
    //     res.json({status:"ok"})
    // }
    // catch(err){
    //     return res.status(400).json({message:"error"})
    // }
}

module.exports={getHouses, getaHouse, addHouses  , editHouse ,deleteHouse}