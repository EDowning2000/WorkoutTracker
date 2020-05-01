const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  name:{
    type: String,
    unique: true 
  },
  weight:{
    type: Number
  }, 
  sets:{
    type: Number,
    required : "Number of sets for this exercise."
  },
  reps:{
  type: Number, 
  required: "Enter a number of reps"    
  },
  duration:{
    type: Number, 
    required: "Enter a duration for this exercise."
  },
  distance:{
    type:String
  },
  date:{
    type: Date,
    default: Date.now
  }
})
const Workout = mongoose.model('Workout', WorkoutSchema)
module.exports = Workout