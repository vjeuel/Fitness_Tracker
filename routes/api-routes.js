const Workout = require("../models/workout.js")

module.exports = app => {
   
   app.get("/api/workouts", (req, res) => {
      Workout.find()
         .then(data => {
            res.json(data);
         });
   });

   app.get("/api/workouts/range", (req, res) => {
      Workout.find({})
         .then(data => {
            res.json(data);
         });
   });

   app.post("/api/workouts", (req, res) => {
      Workout.create({})
         .then(data => {
            res.json(data);
         });
   });

   app.put("/api/workouts/:id", (req, res) => {
      Workout.findOneAndUpdate(
         req.params.id,
         { $push: { exercises: req.body } },
         { new: true }
      )
         .then(data => {
            res.json(data)
         });
   });
};