// Book.js
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    get title() {
      return this._title;
    }
  
    set title(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Title must be a non-empty string.');
      }
      this._title = value;
    }
  
    get author() {
      return this._author;
    }
  
    set author(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Author must be a non-empty string.');
      }
      this._author = value;
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('Year must be a positive number.');
      }
      this._year = value;
    }
  
    printInfo() {
      console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
    }
  
    static oldestBook(books) {
      if (!Array.isArray(books) || books.length === 0) {
        throw new Error('Argument must be a non-empty array of books.');
      }
      return books.reduce((oldest, current) => {return (current.year < oldest.year) ? current : oldest;
    });
  }
}
  
  export default Book;
  