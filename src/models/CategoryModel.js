const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    CatagoryName: {type: String,required: true,unique: true},
    CatagoryImg: {type: String,unique: true}
},
{timestamps: true,versionKey: false}
)
const CategoryModel = mongoose.model("catagories",Schema);
module.exports = CategoryModel;