const express = require("express")
const {getHouses, getaHouse, addHouses  , editHouse ,deleteHouse} = require("../controllers/house")
const router = express.Router();

router.get("/", getHouses); //get all the house list
router.get("/:id", getaHouse); //get all the house list
router.post("/", addHouses); //add  house in thelist
router.put("/:id", editHouse); //get all the house list
router.delete("/:id", deleteHouse);


module.exports=router