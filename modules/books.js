export default class Books {
  constructor() {
    this.listOfBooks = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (title, author) => {
    // Add new book into the existing array of books
    this.listOfBooks.push({
      title,
      author,
    });
    // Replace old object of books with the new updated one
    localStorage.setItem('books', JSON.stringify(this.listOfBooks));
  }

  removeBook = (id) => {
    // Remove the item that has index of id
    this.listOfBooks.splice(id, 1);
    // Replace old object of books with the new updated one
    localStorage.setItem('books', JSON.stringify(this.listOfBooks));
  }
}