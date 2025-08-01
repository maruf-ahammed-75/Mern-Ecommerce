const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    BrandName: {type: String,required: true,unique: true},
    BrandImg: {type: String,unique: true},
},
{timestamps: true,versionKey: false}
)
const BrandModel = mongoose.model("brands",Schema);
module.exports = BrandModel;