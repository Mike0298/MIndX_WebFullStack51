let bookArray = [];

const addBook = () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  if (title.trim() === "" || author.trim() === "" || isbn.trim() === "") {
    alert("Information is required");
  } else {
    let newBookData = {
      title: title,
      author: author,
      isbn: isbn,
    };

    bookArray.push(newBookData);
    render();
  }
};

const render = () => {
  let table = document.getElementById("bookTable");
  clearTable(table);
  bookArray.map((book) => {
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.isbn;
  });
};

const clearTable = (table) => {
  let rowsNum = table.rows.length;
  for (let i = rowsNum - 1; i > 0; i--) {
    table.deleteRow(i);
  }
};
