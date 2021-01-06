const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictprojects.i9kbc.mongodb.net/Librarydb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    bookname : String,
    author : String,
    genre : String,

    imageurl:String
});

var Productdata = mongoose.model('product',ProductSchema);

module.exports =Productdata;