/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook, fetchBooks, deleteBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const [inputs, setInputs] = useState({
    title: '',
    category: 'Action',
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
      item_id: uuidv4(),
      title: inputs.title,
      category: inputs.category,
    };
    setInputs({
      ...inputs,
      title: '',
    });
    dispatch(postBook(newBook));
  };

  const removeFromStore = (e) => {
    dispatch(deleteBook(e.target.id));
  };

  return (
    <>
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.item_id} className="py-3 d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span>{book.category}</span>
              <span>{book.title}</span>
              <span>Anonymous</span>
              <div>
                <button type="button">Comment</button>
                <button type="button" id={book.item_id} onClick={removeFromStore}>Remove</button>
                <button type="button">Edit</button>
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
        <select id="category" name="category" value={inputs.category} onChange={onChange} placeholder="Category">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default Books;
