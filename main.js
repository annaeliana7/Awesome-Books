import { showContent, listenEvent, bookClass } from './modules/utilities.js';
import { DateTime } from './modules/luxon.js';
// List of buttons
const listBtn = document.querySelector('.show-btn');
const addBtn = document.querySelector('.add-btn');
const contactBtn = document.querySelector('.contact-btn');
// Date section
const showDate = document.querySelector('.date');
// Add button
const addButton = document.querySelector('#add-btn');
// Form element
const formElement = document.querySelector('.send-book');

// Show date every 1 second
setInterval(() => {
  showDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

// Event listener for add button
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  // check if input values are not null
  if (formElement[0].value.length > 0 && formElement[1].value.length) {
    bookClass.addBook(formElement[0].value, formElement[1].value);
    formElement.reset();
  }
});
// Show list of books by default when loading then add listener to buttons
showContent('All awesome books', 0);
listenEvent(listBtn, 'All awesome books', 0);
listenEvent(addBtn, 'Add a new book', 1);
listenEvent(contactBtn, 'Contact information', 2);
