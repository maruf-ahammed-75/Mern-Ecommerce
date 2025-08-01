const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    
    StoreId:{type:String,require:true},
    StorePassword:{type:String,require:true},
    Currency:{type:String,require:true},
    SuccessUrl:{type:String,require:true},
    FailUrl:{type:String,require:true},
    CancelUrl:{type:String,require:true},
    IpnUrl:{type:String,require:true},
    InitUrl:{type:String,require:true}
},
{timestamps: true,versionKey: false}
)
const PamentSettingModel = mongoose.model("pamentsettings",Schema);
module.exports = PamentSettingModel;