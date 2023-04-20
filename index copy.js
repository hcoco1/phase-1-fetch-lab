function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
})






fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
  .then(function (val) {
    console.log(val[4]);
  })
/*   Promise {
  <pending>}
    LOG: {url: 'https://anapioficeandfire.com/api/books/5',
     name: 'A Feast for Crows', isbn: '978-0553801507', authors: Array(1),
      numberOfPages: 784, …} */


  fetch('https://anapioficeandfire.com/api/characters/1031')
  .then((resp) => resp.json())
  .then(function (books) {
    console.log(books);
  })

/*   Promise {<pending>}
  LOG: {url: 'https://anapioficeandfire.com/api/characters/1031',
   name: 'Torren Liddle', gender: 'Male', culture: 'Northern mountain clans',
    born: '', …} */




    fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => resp.json())
    .then(function (books) {
      books.forEach(function (val) {
        console.log(`The total number of pages of the book ${val.name} are: ${val.numberOfPages}`)
  
      })
    })
/*   
Promise {<pending>}
VM399:5 The total number of pages of the book A Game of Thrones are: 694
VM399:5 The total number of pages of the book A Clash of Kings are: 768
VM399:5 The total number of pages of the book A Storm of Swords are: 992
VM399:5 The total number of pages of the book The Hedge Knight are: 164
VM399:5 The total number of pages of the book A Feast for Crows are: 784
VM399:5 The total number of pages of the book The Sworn Sword are: 152
VM399:5 The total number of pages of the book The Mystery Knight are: 416
VM399:5 The total number of pages of the book A Dance with Dragons are: 1040
VM399:5 The total number of pages of the book The Princess and the Queen are: 784
VM399:5 The total number of pages of the book The Rogue Prince are: 832
*/


    fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
    .then(function (books) {
      let result = 0;
    books.forEach(function (val) {
      //console.log(val.numberOfPages)
      result += val.numberOfPages;
    })
    console.log(`The total number of pages of all books are ${result}`)
  })

/*   
Promise {<pending>}
  The total number of pages of all books are 6626
*/
