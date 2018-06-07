/*
create all the functions that do the routing for the app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

// Import the model (burger.js) file to use its database functions.
var burger = require('../models/burger.js');

router.get("/", function (req, res) {

  burger.selectAll(function (data) {
    var hbsObject = { 
      burgers: data 
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", 'devoured'
  ], [
    req.body.burger_name
  ], function (result) {

    console.log("in callback");
    res.json({ id: result.insertId });
  });
  console.log("after insert");
});

router.put('/api/burgers/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

   console.log("condition", condition);

  burger.updateOne({ 
    devoured: req.body.devoured 
  },condition, function (result) {
    if (result.changeRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404.
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;