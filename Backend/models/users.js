var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/users');
const Schema = mongoose.Schema;


var Userschema = new Schema({
    email : String,
    username:String ,
    password:String,
    
});
var Userdata = mongoose.model('User', Userschema);                        

module.exports = Userdata;