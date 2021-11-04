/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, fetchBooks, removeBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const [inputs, setInputs] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputs.title,
      author: inputs.author,
    };
    setInputs({
      title: '',
      author: '',
    });
    dispatch(addBook(newBook));
  };

  const removeFromStore = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <>
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id} className="py-3 d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span>Action</span>
              <span>{book.title}</span>
              <span>{book.category}</span>
              <div>
                <button type="button">Comment</button>
                <button type="button" id={book.id} onClick={removeFromStore}>Remove</button>
                <button type="button">Exit</button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <span>
                64%
              </span>
              <span>Completed</span>
            </div>
            <div className="d-flex flex-column">
              <span>CURRENT CHAPTER</span>
              <span>Chapter 1</span>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" id="title" name="title" value={inputs.title} placeholder="Book title" onChange={onChange} required />
        <input type="text" id="author" name="author" value={inputs.author} placeholder="Author" onChange={onChange} required />
        <select id="category" name="category" placeholder="Category">
          <option>Category</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default Books;
