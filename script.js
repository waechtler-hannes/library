const myLibrary = [];

addBookToLibrary("The Hobbit", "J.R.R. Tolikien", 295, false);
addBookToLibrary("Der Name der Rose", "Umberto Eco", 500, true);
addBookToLibrary("Der kleine Prinz", "Antoine de Saint-Exupéry", 96, false);
addBookToLibrary("Harry Potter und der Stein der Weisen", "J.K. Rowling", 309, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Stolz und Vorurteil", "Jane Austen", 432, false);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

function displayBooks(array) {
    const libraryDisplay = document.querySelector(".main-content")
    array.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.textContent = book.title;
        libraryDisplay.appendChild(bookElement);
    });
}

// displayBooks(myLibrary);