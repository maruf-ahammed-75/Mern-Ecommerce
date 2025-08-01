const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    email:{type:String,required:true,unique:true,lowercase:true},
    otp:{type:String,required:true}

},
{timestamps: true,versionKey: false}
)
const UserModel = mongoose.model("users",Schema);
module.exports = UserModel;