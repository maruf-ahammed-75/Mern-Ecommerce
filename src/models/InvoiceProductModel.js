const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId,require:true},
    ProductId:{type:mongoose.Schema.Types.ObjectId,require:true},
    InvoiceId:{type:mongoose.Schema.Types.ObjectId,require:true},


    Quantity:{type:String,require:true},
    Color:{type:String,require:true},
    Size:{type:String,require:true},
    Price:{type:String,require:true}
},
{timestamps: true,versionKey: false}
)
const InvoiceProductModel = mongoose.model("invoiceproducts",Schema);
module.exports = InvoiceProductModel;