const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    Img1:{Type:String,required:true},
    Img2:{Type:String,required:true},
    Img3:{Type:String,required:true},
    Img4:{Type:String,required:true},
    Img5:{Type:String},
    Img6:{Type:String},
    Img7:{Type:String},
    Img8:{Type:String},

    Descriptiopn:{Type:String,required:true},
    Color:{Type:String,required:true},
    Size:{Type:String,required:true},


    ProductID:{type:mongoose.Schema.Types.ObjectId,require:true},

},
{timestamps: true,versionKey: false}
)
const ProductDetailModel = mongoose.model("productdetails",Schema);
module.exports = ProductDetailModel;