const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    FeatureName:{Type:String,required:true},
    Description:{Type:String,required:true},
    Img:{Type:String,required:true}
},
{timestamps: true,versionKey: false}
)
const FeaturesModel = mongoose.model("features",Schema);
module.exports = FeaturesModel;