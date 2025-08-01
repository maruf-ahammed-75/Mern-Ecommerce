const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    Title:{Type:String,required:true},
    ShortDescription:{Type:String,required:true},
    Price:{Type:String,required:true},
    Discount:{Type:Boolean,required:true},
    DiscountPrice:{Type:String,required:true},
    Img:{Type:String,required:true},
    Star:{Type:String,required:true},
    Stock:{Type:Boolean,required:true},
    Remark:{Type:String,required:true},
    CategoryID:{type:mongoose.Schema.Types.ObjectId,require:true},
    BrandID:{type:mongoose.Schema.Types.ObjectId,require:true}
},
{timestamps: true,versionKey: false}
)
const ProductModel = mongoose.model("products",Schema);
module.exports = ProductModel;