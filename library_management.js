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
//task 5
/*calculateTotalBooksAvailable() {
        return this.books.filter((book) => (book.isAvailable)).length;
//not executing due to redundancy of the method with the getAvailableBooks method already in place    
}*/
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

//task 4
class VIPPatron extends Patron {
    constructor(name, borrowedBooks, priority) { //add priority property to vip patrons
        super (name); //calling parent class
        this.priority = priority; //setting priortiy 
    }
    borrowBook(book) {
        if (this.priority && book.isAvailable === true){ //check vip status and availability
        super.borrowBook(book);} // VIP patrons borrow if the book is available}
        else {
            //error message if book unavailable
        return `VIP Patron ${this.name} tried to borrow the book ${book.title}, but the book is unavailable at the moment.`;
        }
}
}

//task 6
// Create sections
const horror = new Section("Horror");
const fantasy = new Section("Fantasy");

// Create books
const book1 = new Book("1929", "William Pandora", "4567893110");
const book2 = new Book("Crazy Monster", "Devin Hart", "8597461203");
const book3 = new Book("The Princess", "Farah Hawkins", "4567823910");

// Add books to sections
horror.addBook(book1);
horror.addBook(book2);
fantasy.addBook(book3);

// Create patrons
const regularPatron = new Patron("Frank Hill");
const vipPatron = new VIPPatron("Victoria Menalie", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);

// List books and availability
horror.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${horror.getAvailableBooks()}`);
console.log(`Total available books in Science: ${fantasy.getAvailableBooks()}`);