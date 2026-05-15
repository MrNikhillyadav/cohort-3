const  mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    title : String,
    done :  Boolean,
    createdBy : {type :  mongoose.Schema.Types.ObjectId, ref : "Users",  required : true}
})

const TodoModel = mongoose.model("Todos", TodoSchema)

module.exports = {
    TodoModel
}