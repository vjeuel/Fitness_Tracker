const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
   {
      day: {
         type: Date,
         default: Date.now
      },
      exercises: [
         {
            type: {
               type: String,
               trim: true,
               required: "Exercise type is required"
            },
            name: {
               type: String,
               trim: true,
               required: "Exercise name is required"
            },
            duration: {
               type: Number,
               trim: true,
               required: "Exercise duration is required, enter in minutes"
            },
            weight: {
               type: Number,
               trim: true,
            },
            reps: {
               type: Number,
               trim: true,
            },
            sets: {
               type: Number,
               trim: true,
            },
            distance: {
               type: Number,
               trim: true,
            }
         }
      ]
   });
   
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;