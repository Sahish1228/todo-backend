const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    userId: {
        type: Number,
        taskTitle: String,
        required: true,
    },
    taskName: {
        type: String,
        required: true,
    },
    taskDescription: {
        type: String,
        required: false,
    },
    priority: {
        type:Number,
        reuired: true,
    },
    deadline: {
        type: Date,
        reuired:  false,
    },
    completeStatus: {
        type: Boolean,
        required: true,
    }
})
module.exports = task = mongoose.model('task', taskSchema);