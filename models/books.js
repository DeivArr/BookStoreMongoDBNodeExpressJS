const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
    },
    pages:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
}

module.exports.addBook = (book, callback) => {
    Book.create(book, callback);
}

module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}