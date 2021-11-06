/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook, fetchBooks, deleteBook } from '../redux/books/books';
import progressLogo from '../progress-logo.png';

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
    <div className="container">
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.item_id} className="row book-item ps-3">
            <div className="d-flex flex-column col-md-5 mt-4">
              <span className="book-category mb-2">{book.category}</span>
              <span className="book-title">{book.title}</span>
              <span className="book-author">Anonymous</span>
              <div className='mt-3'>
                <button type="button" className="book-btn me-3">Comment</button>
                <button type="button" className="book-btn me-3" id={book.item_id} onClick={removeFromStore}>Remove</button>
                <button type="button" className="book-btn me-3">Edit</button>
              </div>
            </div>
            <div className="d-flex col-md-2">
              <img src={progressLogo} alt="Progress" className="progress-logo mt-5 me-3" />
              <div className="d-flex flex-column">
                <span className="percent-number mt-5">64%</span>
                <span className="percent-symbol">Completed</span>
              </div>
            </div>
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              < div className="line-item"></div>
            </div>
            <div className="d-flex flex-column col-md-4 align-items-start mt-4">
              <span className="current-chapter">CURRENT CHAPTER</span>
              <span className="chapter mt-1">Chapter 1</span>
              <button type="button" className="update-btn mt-4">UPDATE PROGRESS</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="d-flex">
        <input type="text" id="title" name="title" className="title-input" value={inputs.title} placeholder="Book title" onChange={onChange} required />
        <select id="category" name="category" className="category-input" value={inputs.category} onChange={onChange} placeholder="Category">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Books;
