//task 1
class Book {
    constructor (title, author, ISBN, _isAvailable = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = _isAvailable;
    }
    getDetails() {
        console.log(`Title of the Book: ${this.title} \n Author: ${this.author} \n ISBN: ${this.ISBN} \n Available: ${this._isAvailable}`);
    } //display book details
    
    get isAvailable(){
        return this._isAvailable;
    } 
    set isAvailable(new_isAvailable){
        this._isAvailable = new_isAvailable;
    }
    //use getter and setter for book availability status
}

//task 2
class Section {
    constructor(name, books) {
        this.name = name;
        this.books = []; //create books array
    }
    addBook(book) {
        this.books.push(book);//add new book to array using method
    }
    getAvailableBooks() {
        let availableBooks = this.books.filter((book) => (book.isAvailable === true));
        return availableBooks.length; //display books available 
    }
    listBooks() {
        this.books.forEach((book, index) => {
            console.log (`${index +1}. Title: ${book.title} \n Available: ${book.isAvailable}`);
            }
        ) //list all books and their availability
    }
}

//task 3
class Patron {
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = []; //create borrowed books array
    }
    borrowBook(book) {
        if (book.isAvailable === true){ //check for book's availability
        this.borrowedBooks.push(book); //add to patron's borrowed book array
        book.isAvailable = false; //change book status
        return `Patron ${this.name} borrowed the book ${book.title} successfully.`;}
        else {
        return `Sorry, this book is unavailable`;
        //display error message
        }
    }
    returnBook(book) {
        let foundBook = this.borrowedBooks.find(item => item.title === book.title);
        if (foundBook) { //check if book was borrowed
            book.isAvailable = true; //change availability
           this.borrowedBooks = this.borrowedBooks.filter(item => item.title !== foundBook.title);
           //remove the book from borrowed books
           return `The book ${book.title} has been returned successfully.`;
        }
        else {
            return `Sorry, this book was not borrowed.`;
            //dispay error message
        }
    }
}