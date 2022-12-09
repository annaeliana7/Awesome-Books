import Books from './books.js';
// Content title
const contentTitle = document.querySelector('.content .title');
// 3 sections : book list , add list and contact Info
const bookList = document.querySelector('.book-list');
const addBookList = document.querySelector('.add-book');
const contactInfoList = document.querySelector('.contact-info');
// Table of books to add dynamically a list of books
const tableBooks = document.querySelector('.book-table');
export const bookClass = new Books();
// populate book list
const populateBookList = () => {
  const listOfBooks = JSON.parse(localStorage.getItem('books')) || [];
  // Reset table from previous contents
  tableBooks.innerHTML = '';
  if (listOfBooks.length === 0) {
    tableBooks.innerHTML += `
    <tr>
      <td>No books found please add a new book</td>
    </tr>
    `;
  } else {
    listOfBooks.forEach((listbook) => {
      tableBooks.innerHTML += `
      <tr>
        <td>${listbook.title} by ${listbook.author}</td>
        <td><button class="remove-btn" type="submit">Remove</button></td>
      </tr>
      `;
    });
  }
};
// Change and show content
export const showContent = (title, id) => {
  contentTitle.innerHTML = title;
  switch (id) {
    case 0: {
      bookList.classList.add('active');
      addBookList.classList.remove('active');
      contactInfoList.classList.remove('active');
      populateBookList();
      // Remove buttons
      const removeBtns = document.querySelectorAll('.remove-btn');
      // Event listener to remove buttons
      removeBtns.forEach((button, index) => {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          bookClass.removeBook(index);
          showContent('All awesome books', 0);
        });
      });
      break;
    }

    case 1: {
      bookList.classList.remove('active');
      addBookList.classList.add('active');
      contactInfoList.classList.remove('active');
      break;
    }

    case 2: {
      bookList.classList.remove('active');
      addBookList.classList.remove('active');
      contactInfoList.classList.add('active');
      break;
    }

    default:
  }
};

// Add event listener on a button
export const listenEvent = (button, title, id) => {
  button.addEventListener('click', () => {
    showContent(title, id);
  });
};
