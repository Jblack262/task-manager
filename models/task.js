const mongoose = require('mongoose')

//So what is a schema?
const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Must Provide Your Name"],
        trim: true,
        maxlength: [20, 'Name Cannot Be More Than 20 Characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})
//This is basic validation not advanved
module.exports = mongoose.model('Task', TaskSchema)