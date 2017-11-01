// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // //api post requests
  // app.post("/api/friends", function(req, res) {
  	
  // });


}