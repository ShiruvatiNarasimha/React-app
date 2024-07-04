const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://simhanaranr7:9vCZLzyA6Lce1LPD@cluster0.nt5hrlo.mongodb.net/todos")


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo
}