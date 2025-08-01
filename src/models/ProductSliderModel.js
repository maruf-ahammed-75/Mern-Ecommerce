const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    Title:{Type:String,required:true},
    Description:{Type:String,required:true},
    Price:{Type:String,required:true},
    Img:{Type:String,required:true},

    ProdectID:{type:mongoose.Schema.Types.ObjectId,require:true}
},
{timestamps: true,versionKey: false}
)
const ProductSliderModel = mongoose.model("productsliders",Schema);
module.exports = ProductSliderModel;