import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
      super(title, author, year);
      this.fileFormat = fileFormat;
    }
  
    get fileFormat() {
      return this._fileFormat;
    }
  
    set fileFormat(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Формат файлу повинен бути непорожнім рядком');
      }
      this._fileFormat = value;
    }
  
    printInfo() {
      console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    }
  
    static fromBook(book, fileFormat) {
      if (!(book instanceof Book)) {
        throw new Error('Аргумент має бути екземпляром класу Book');
      }
      return new EBook(book.title, book.author, book.year, fileFormat);
    }
  }
  export default EBook;