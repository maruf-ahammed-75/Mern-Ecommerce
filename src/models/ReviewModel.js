const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    ProductId:{type:mongoose.Schema.Types.ObjectId,require:true},
    UserId:{type:mongoose.Schema.Types.ObjectId,require:true},

    Description:{type:String,require:true},
    rating:{type:String,require:true},
},
{timestamps: true,versionKey: false}
)
const ReviewModel = mongoose.model("reviews",Schema);
module.exports = ReviewModel;