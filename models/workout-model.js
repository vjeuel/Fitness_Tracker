const { Mongoose } = require("mongoose")

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
   {
      day: Date,
      default: Date.now
   },
   exercises: [
      type: {
         type: String,
         trim: true,

      }
   ]
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;