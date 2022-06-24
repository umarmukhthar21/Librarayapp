const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookName : String,
    Author : String,
    IsbnNumber : String,
    price : Number,
    rating :Number,
    
});

var Bookdata = mongoose.model('product', BookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;