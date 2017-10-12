var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Blog = require("../model/blog");
mongoose.connect('mongodb://HoangTran:nevergiveup1601@ds117485.mlab.com:17485/movie', { useMongoClient: true });
/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource');
});
router.get("/api", function (req, res) {
  Blog.find(function (err, doc) {
    res.json(doc);
  })
});

module.exports = router;
