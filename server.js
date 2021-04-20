const express = require("express");
const session = require('express-session');
// const mongoose = require("mongoose");
const routes = require("./backend/routes");
// const config = require("./backend/config");
// const data = require("./backend/scripts/seedDB")

const sequelize = require('./backend/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
 
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// const mongodbUrl = data.MONGODB_URI;
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/products", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
