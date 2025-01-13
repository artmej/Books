var path = require('path');
var Book = require('./model');
var routes = function(app) {
    app.get('/book', async function(req, res) {
        try {
            const results = await Book.find({});
            res.json(results);
        } catch (err) {
            res.send(err);
        }
    });

    app.post('/book', async function(req, res) {
        var book = new Book({
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.author,
            pages: req.body.pages
        });

        try {
            const result = await book.save();
            res.json({
                message: "Successfully added book",
                book: result
            });
        } catch (err) {
            res.send(err);
        }
    });

    app.delete('/book/:isbn', async function(req, res) {
        try {
            const isbn = req.params.isbn;
            console.log('ISBN to delete:', isbn);
            const result = await Book.deleteOne({ isbn: isbn.toString() });
            if (result) {
                res.json({
                        message: "Successfully deleted the book",
                        book: result
                });
            } else {
                        console.log('Book not found'); // Log en caso de no encontrar el libro
                        res.status(404).json({ message: "Book not found" });
                    }
                } catch (err) {
                    res.send(err);
                }
            });
        
            app.get('*', function(req, res) {
                res.sendFile(path.join(__dirname + '/public', 'index.html'));
            });
        };
