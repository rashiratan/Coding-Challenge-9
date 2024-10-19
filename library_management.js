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