const express = require("express");
const cors = require("cors");
const Bookdata = require("./models/library");
const Userdata = require("./models/users");
var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/library');

var UserRouter = require('./routes/users.route');
var LibraryRouter = require('./routes/library.route')


const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/users', UserRouter);
app.use('/Library', LibraryRouter);












app.listen(7000,() => {
 console.log('server is listening in port 7000')
})