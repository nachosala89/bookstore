const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sP2ERQui0eQD73WwVWZs/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooksSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

const formatBooks = (obj) => {
  const arr = [];
  const [keys, values] = [Object.keys(obj), Object.values(obj)];
  values.forEach((book, index) => {
    const newBook = {
      item_id: keys[index],
      title: book[0].title,
      category: book[0].category,
    };
    arr.push(newBook);
  });
  return arr;
};

export const fetchBooks = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((books) => dispatch(fetchBooksSuccess(formatBooks(books))));
};

export const postBook = (book) => (dispatch) => fetch(URL, {
  method: 'POST',
  body: JSON.stringify(book),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.status)
  .then((status) => {
    if (status === 201) {
      dispatch(addBook(book));
    }
  });

export const deleteBook = (id) => (dispatch) => {
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
