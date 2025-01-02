const myLibrary = [];

addBookToLibrary("The Hobbit", "J.R.R. Tolikien", 295, false);
addBookToLibrary("The Name of the Rose", "Umberto Eco", 500, true);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, false);
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 309, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, false);

const toggleFormButton = document.querySelector("#toggle-form");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".new-book");

toggleFormButton.addEventListener("click", () => {
    formContainer.classList.toggle("hidden");
    const iconPath = toggleFormButton.querySelector("path");
    const p = toggleFormButton.querySelector("p");
    if (p.textContent === "Add new book") {
        p.textContent = "Close form";
        iconPath.setAttribute("d", "M200-440v-80h560v80H200Z");
    } else {
        p.textContent = "Add new book";
        iconPath.setAttribute("d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z");
        clearForm();
    }
})

form.addEventListener("submit", () => {
    addBookToLibrary(
        form.querySelector("#title").value, 
        form.querySelector("#author").value, 
        form.querySelector("#pages").value, 
        form.querySelector("#read").checked)
    clearForm();
    updateBooks();
})

function clearForm() {
    form.querySelector("#title").value = "";
    form.querySelector("#author").value = "";
    form.querySelector("#pages").value = "";
    form.querySelector("#read").checked = "";
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(array) {
    const libraryDisplay = document.querySelector(".main-content")
    array.forEach(book => {
        // Create needed Elements
        const bookElement = document.createElement("div");
        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const deleteButtonContainer = document.createElement("div");
        const deleteButton = document.createElement("button");
        // Add classes to Elements
        bookElement.classList.add("book");
        title.classList.add("title");
        author.classList.add("author");
        pages.classList.add("pages");
        deleteButton.classList.add("delete-button");
        if (book.read) {
            bookElement.classList.add("read");
        } else {
            bookElement.classList.add("not-read");
        }
        // Add Text-Content
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + " pages";
        deleteButton.textContent = "Delete";
        // Append Elements
        libraryDisplay.appendChild(bookElement);
        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(pages);
        bookElement.appendChild(deleteButton);
    });
}

function removeBooks() {
    const libraryDisplay = document.querySelector(".main-content");
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
    }
}

function updateBooks() {
    removeBooks();
    displayBooks(myLibrary);
}


displayBooks(myLibrary);