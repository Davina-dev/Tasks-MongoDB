const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
  },
  { timestamps: true },
)

const Task = mongoose.model('task', taskSchema)

module.exports = Task
