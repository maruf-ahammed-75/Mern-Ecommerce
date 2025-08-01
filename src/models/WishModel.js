const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    ProductId:{type:mongoose.Schema.Types.ObjectId,require:true},
    UserId:{type:mongoose.Schema.Types.ObjectId,require:true}
},
{timestamps: true,versionKey: false}
)
const WishModel = mongoose.model("wishes",Schema);
module.exports = WishModel;