var Blog = require("./blog");
var mongoose = require("mongoose");
var data = [];
var done = 0;
mongoose.connect('mongodb://HoangTran:nevergiveup1601@ds117485.mlab.com:17485/movie', { useMongoClient: true });
data.push(new Blog({
    "title": "Hoangggg",
    "body": "HOang dep trai",
    "date": "09/03/1996"
}));
data.push(new Blog({
    "title": "Ngan",
    "body": "HOang dep trai",
    "date": "09/03/1996"
}))
data.forEach(function(item){
    item.save(function(err, result){
        done++;
        if(done === data.length) {
            mongoose.disconnect();
        }
    });
})