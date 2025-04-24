var bookList = [];
var defaultBookCover = "https://via.placeholder.com/150x220?text=No+Cover";

function searchBooks() {
  var searchText = document.getElementById("searchInput").value;
  
  if (!searchText) {
    alert("Please type a book name first");
    return;
  }
  
  bookList = [];
  
  var messageArea = document.getElementById("noSearchResults");
  messageArea.style.display = "block";
  messageArea.innerHTML = "Looking for books...";
  
  fetch("https://openlibrary.org/search.json?q=" + encodeURIComponent(searchText) + "&limit=100")
    .then(response => response.json())
    .then(data => {
      if (!data.docs || data.docs.length === 0) {
        messageArea.innerHTML = "No books found. Try another search.";
        document.getElementById("bookResults").innerHTML = "";
      } else {
        bookList = data.docs;
        showBooks(bookList);
        messageArea.style.display = "none";
      }
    })
    .catch(error => {
      messageArea.innerHTML = "Error finding books. Try again.";
      console.log("Error:", error);
    });
}

function showBooks(books) {
  var resultsArea = document.getElementById("bookResults");
  resultsArea.innerHTML = "";
  resultsArea.classList.add("books-container");
  
  books.forEach((book, index) => {
    var bookInfo = {
      title: book.title || "Unknown Title",
      author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
      coverUrl: book.cover_i ? "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg" : defaultBookCover,
      year: book.first_publish_year || "Unknown",
      language: book.language ? (Array.isArray(book.language) ? book.language[0] : book.language) : "Unknown",
      subject: book.subject ? book.subject.slice(0, 3).join(", ") : "Not available"
    };
    
    var bookCard = document.createElement("div");
    bookCard.className = "book-card";
    
    bookCard.innerHTML = `
      <img src="${bookInfo.coverUrl}" alt="${bookInfo.title}" onerror="this.src='${defaultBookCover}'">
      <div class="book-info">
        <h3 class="book-title">${bookInfo.title}</h3>
        <p class="book-author">${bookInfo.author}</p>
        <button class="details-button" onclick="showDetails(${index})">Details</button>
      </div>
    `;
    
    resultsArea.appendChild(bookCard);
  });
}

function showDetails(bookNumber) {
  var book = bookList[bookNumber];
  
  document.getElementById("modalContent").innerHTML = `
    <img src="${book.cover_i ? "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg" : defaultBookCover}" 
         class="book-details-img" onerror="this.src='${defaultBookCover}'">
    <h2>${book.title || "Unknown Title"}</h2>
    <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
    <p><strong>Published:</strong> ${book.first_publish_year || "Unknown"}</p>
    <p><strong>Language:</strong> ${book.language ? (Array.isArray(book.language) ? book.language[0] : book.language) : "Unknown"}</p>
    <p><strong>Subjects:</strong> ${book.subject ? book.subject.slice(0, 3).join(", ") : "Not available"}</p>
  `;
  
  document.getElementById("bookModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

function openTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });
  
  document.getElementById(tabName).classList.add("active");
  
  document.querySelectorAll(".tab-button").forEach(button => {
    button.classList.remove("active");
    if (button.getAttribute("onclick").includes(tabName)) {
      button.classList.add("active");
    }
  });
}

window.onload = function() {
  document.getElementById("searchButton").addEventListener("click", searchBooks);
  
  document.getElementById("searchInput").addEventListener("keyup", event => {
    if (event.key === "Enter") searchBooks();
  });
  
  window.onclick = event => {
    if (event.target == document.getElementById("bookModal")) {
      closeModal();
    }
  };
};