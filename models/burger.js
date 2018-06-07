// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var table = "burgers";
var burger = {
  selectAll: function (cb) {
    orm.selectAll(table, function (res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function (cols, vals, cb) {
    orm.insertOne(table, cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, function (res) {
      cb(res);
    });
  },
  
};

module.exports = burger;