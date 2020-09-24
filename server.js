const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const compression = require("compression")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(compression());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://vjeuel:pizza123@ds237660.mlab.com:37660/heroku_7wczj2th", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
   console.log(`App running on port ${PORT}!`);
});