var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/Books';
mongoose.connect(dbHost, { useNewUrlParser: true,  useUnifiedTopology: true } );
mongoose.connection;
mongoose.set('debug', true);
var bookSchema = mongoose.Schema( {
  name: { type: String, required: true },
  isbn: { type: String, required: true, unique: true, dropDups: true},
  author: { type: String, required: true },
  pages: { type: Number, required: true }    
});
var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
