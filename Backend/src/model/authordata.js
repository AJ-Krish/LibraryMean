const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictprojects.i9kbc.mongodb.net/Librarydb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    authorname : String,
    genre : String,
    work : String,
    imageurl:String
});

var Authordata = mongoose.model('author',AuthorSchema);

module.exports =Authordata;