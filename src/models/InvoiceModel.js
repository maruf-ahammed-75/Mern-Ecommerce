const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId,require:true},
    Payable:{type:String,require:true},
    UserDetails:{type:String,require:true},
    ShipDetails:{type:String,require:true},
    TrainId:{type:String,require:true},
    ValId:{type:String,require:true},
    DeliveryStatus:{type:String,require:true},
    PaymentStatus:{type:String,require:true},
    Total:{type:String,require:true},
    Vat:{type:String,require:true}
},
{timestamps: true,versionKey: false}
)
const InvoiceModel = mongoose.model("invoices",Schema);
module.exports = InvoiceModel;