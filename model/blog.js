var mongoose = require("mongoose");
mongoose.connect('mongodb://HoangTran:nevergiveup1601@ds117485.mlab.com:17485/movie', { useMongoClient: true });
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var BlogPost = new Schema({
    title: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('blog', BlogPost);