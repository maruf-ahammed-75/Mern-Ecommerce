const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    ProductId:{type:mongoose.Schema.Types.ObjectId,require:true},
    UserId:{type:mongoose.Schema.Types.ObjectId,require:true},

    Color:{type:String,require:true},
    Quantity:{type:String,require:true},
    Size:{type:String,require:true},
    
},
{timestamps: true,versionKey: false}
)
const CartModel = mongoose.model("carts",Schema);
module.exports = CartModel;