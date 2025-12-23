const mongoose = require("mongoose")

const houseSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default: ""
    },
    
    coverImage:{
        type:String
    }

},{ timestamps: true })

module.exports = mongoose.model("Houses", houseSchema);
