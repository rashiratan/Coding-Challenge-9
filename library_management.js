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

