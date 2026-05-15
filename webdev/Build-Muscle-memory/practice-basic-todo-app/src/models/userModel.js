const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email : {type : String, required : true, unique : true, lowercase : true},
    password : {type : String, unique : true, minLength : 4}
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = {
    UserModel
};