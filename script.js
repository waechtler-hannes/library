const myLibrary = [];

addBookToLibrary("The Hobbit", "J.R.R. Tolikien", 295, false);
addBookToLibrary("The Name of the Rose", "Umberto Eco", 500, true);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, false);
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 309, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, false);

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
        // Create needed Elements
        const bookElement = document.createElement("div");
        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const deleteButton = document.createElement("div");
        const button = document.createElement("button");
        // Add classes to Elements
        bookElement.classList.add("book");
        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages");
        deleteButton.classList.add("delete-button");
        button.classList.add("button");
        // Add Text-Content
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + " pages";
        button.textContent = "Delete";
        // Append Elements
        libraryDisplay.appendChild(bookElement);
        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(pages);
        bookElement.appendChild(deleteButton);
        deleteButton.appendChild(button);
    });
}

displayBooks(myLibrary);