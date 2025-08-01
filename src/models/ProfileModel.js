const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId,require:true},
    UserAddress:{type:String},
    UserCity:{type:String},
    UserCountry:{type:String},
    UserFax:{type:String},
    UserName:{type:String},
    UserPhone:{type:String},
    UserPostCode:{type:String},
    UserState:{type:String},

    ShipAddress:{type:String},
    ShipCity:{type:String},
    ShipCountry:{type:String},
    ShipName:{type:String},
    ShipPhone:{type:String},
    ShipPostCode:{type:String},
    ShipState:{type:String},
},
{timestamps: true,versionKey: false}
)
const ProfileModel = mongoose.model("profiles",Schema);
module.exports = ProfileModel;