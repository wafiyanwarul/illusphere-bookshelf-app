// Do your work here...
console.log('Hello, world!')

// Function to save data to local storage
function saveToLocalStorage (books) {
  localStorage.setItem('bookshelf', JSON.stringify(books))
}

// Function to retrieve data from local storage
function getFromLocalStorage () {
  return JSON.parse(localStorage.getItem('bookshelf')) || []
}

// Function to display books in the UI with optional search query
function displayBooks (searchQuery = '') {
  const books = getFromLocalStorage()
  const incompleteBookshelf = document.getElementById('incompleteBookList')
  const completeBookshelf = document.getElementById('completeBookList')
  const noResults = document.getElementById('noResults')

  incompleteBookshelf.innerHTML = ''
  completeBookshelf.innerHTML = ''

  let hasResults = false

  books.forEach(book => {
    if (book.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      const bookElement = createBookElement(book)

      if (book.isComplete) {
        completeBookshelf.appendChild(bookElement)
      } else {
        incompleteBookshelf.appendChild(bookElement)
      }

      hasResults = true
    }
  })

  if (!hasResults && searchQuery) {
    noResults.classList.remove('d-none')
  } else {
    noResults.classList.add('d-none')
  }
}

// Function to Search Book and Clear Search Field
document.addEventListener('DOMContentLoaded', function () {
  displayBooks()
  const searchInput = document.getElementById('searchBookTitle')
  const clearSearch = document.getElementById('clearSearch')

  searchInput.addEventListener('input', function () {
    clearSearch.classList.toggle('d-none', !this.value.trim())
  })

  clearSearch.addEventListener('click', function () {
    searchInput.value = ''
    clearSearch.classList.add('d-none')
    displayBooks()
  })
})

// Function to Add a Book
function addBook () {
  const title = document.getElementById('bookFormTitle').value
  const author = document.getElementById('bookFormAuthor').value
  const year = Number(document.getElementById('bookFormYear').value)
  const isComplete = document.getElementById('bookFormIsComplete').checked

  const newBook = {
    id: new Date().getTime(),
    title,
    author,
    year,
    isComplete
  }

  const books = getFromLocalStorage()
  books.push(newBook)
  saveToLocalStorage(books)
  displayBooks()

  Swal.fire({
    icon: 'success',
    title: 'Buku Ditambahkan!',
    text: `Buku "${title}" berhasil ditambahkan.`,
    confirmButtonText: 'OK'
  })
}

// Function to Change Book Status
function toggleBookCompletion (bookId) {
  let books = getFromLocalStorage()
  books = books.map(book => {
    if (book.id === bookId) {
      book.isComplete = !book.isComplete
      Swal.fire({
        icon: 'info',
        title: 'Status Buku Diubah!',
        text: `Buku "${book.title}" sekarang ${
          book.isComplete ? 'selesai dibaca' : 'belum selesai dibaca'
        }.`,
        confirmButtonText: 'OK'
      })
    }
    return book
  })

  saveToLocalStorage(books)
  displayBooks()
}

// Function to create Book Element
function createBookElement (book) {
  const bookContainer = document.createElement('div')
  bookContainer.classList.add('col-md-4', 'p-3', 'border', 'rounded')
  bookContainer.setAttribute('data-bookid', book.id)
  bookContainer.setAttribute('data-testid', 'bookItem')

  const bookTitle = document.createElement('h3')
  bookTitle.setAttribute('data-testid', 'bookItemTitle')
  bookTitle.innerText = book.title

  const bookAuthor = document.createElement('p')
  bookAuthor.setAttribute('data-testid', 'bookItemAuthor')
  bookAuthor.innerText = `Penulis: ${book.author}`

  const bookYear = document.createElement('p')
  bookYear.setAttribute('data-testid', 'bookItemYear')
  bookYear.innerText = `Tahun: ${book.year}`

  const toggleButton = document.createElement('button')
  toggleButton.setAttribute('data-testid', 'bookItemIsCompleteButton')
  toggleButton.classList.add('btn', 'btn-success', 'me-2')
  toggleButton.innerText = book.isComplete
    ? 'Belum Selesai Dibaca'
    : 'Selesai Dibaca'
  toggleButton.addEventListener('click', () => toggleBookCompletion(book.id))

  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('data-testid', 'bookItemDeleteButton')
  deleteButton.classList.add('btn', 'btn-danger')
  deleteButton.innerText = 'Hapus Buku'
  deleteButton.addEventListener('click', () => deleteBook(book.id))

  bookContainer.appendChild(bookTitle)
  bookContainer.appendChild(bookAuthor)
  bookContainer.appendChild(bookYear)
  bookContainer.appendChild(toggleButton)
  bookContainer.appendChild(deleteButton)

  return bookContainer
}

// Function to Delete a book
function deleteBook (bookId) {
  Swal.fire({
    title: 'Apakah Anda yakin?',
    text: 'Buku akan dihapus secara permanen!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal'
  }).then(result => {
    if (result.isConfirmed) {
      let books = getFromLocalStorage()
      const book = books.find(book => book.id === bookId)
      books = books.filter(book => book.id !== bookId)
      saveToLocalStorage(books)
      displayBooks()

      Swal.fire({
        icon: 'success',
        title: 'Buku Dihapus!',
        text: `Buku "${book.title}" telah dihapus.`,
        confirmButtonText: 'OK'
      })
    }
  })
}

document
  .getElementById('bookForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    addBook()
  })

document.getElementById('searchBook').addEventListener('submit', searchBook)

function searchBook (event) {
  event.preventDefault()
  const searchQuery = document.getElementById('searchBookTitle').value
  displayBooks(searchQuery)
}
