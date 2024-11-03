import Book from './Book.js';
import EBook from './EBook.js';

// Створення об'єктів класу Book
const book1 = new Book('Кобзар', 'Тарас Шевченко', 1840);
const book2 = new Book('Лісова пісня', 'Леся Українка', 1911);

// Вивід інформації про книги
book1.printInfo();
book2.printInfo();

// Створення об'єкта класу EBook
const ebook1 = new EBook('Кобзар', 'Тарас Шевченко', 1840, 'pdf');
ebook1.printInfo();

// Використання статичного методу для пошуку найдавнішої книги
const oldest = Book.oldestBook([book1, book2, ebook1]);
console.log('Найдавніша книга:');
oldest.printInfo();

// Використання статичного методу fromBook для створення EBook на основі Book
const ebook2 = EBook.fromBook(book2, 'epub');
ebook2.printInfo();
