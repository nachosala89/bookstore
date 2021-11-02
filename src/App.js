import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <>
    <Navbar />
    <div className="container mt-5">
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  </>
);

export default App;
