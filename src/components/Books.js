import React, { useState } from 'react';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The hunger games',
      category: 'Action',
      author: 'S. Collins',
      progress: 64,
      chapter: 'Chapter 16',
    },
    {
      id: 2,
      category: 'Action',
      title: 'The hunger games',
      author: 'S. Collins',
      progress: 64,
      chapter: 'Chapter 16',
    }
  ];

  return (
    <>
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id} className="py-3 d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span>{book.category}</span>
              <span>{book.title}</span>
              <span>{book.author}</span>
              <div>
                <button>Comment</button>
                <button>Remove</button>
                <button>Exit</button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <span>{book.progress}%</span>
              <span>Completed</span>
            </div>
            <div className="d-flex flex-column">
              <span>CURRENT CHAPTER</span>
              <span>{book.chapter}</span>
              <button>UPDATE PROGRESS</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" id="title" name="title" placeholder="Book title"></input>
        <select id="category" name="category" placeholder="Category">
          <option>Category</option>
          <button>ADD BOOK</button>
        </select>
      </form>
    </>
  );
};

export default Books;