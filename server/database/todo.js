const mongoose = require("mongoose") // requiring the mongoose package

const taskSchema = new mongoose.Schema({
  task: {
    type: String, 
    //unique: true, 
    //required: true,
  },
  
})

const Task = mongoose.model("CollectionAisensy", taskSchema) 

module.exports = Task 