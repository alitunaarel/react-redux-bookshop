import React from 'react';
import './App.css';

import { connect } from "react-redux"
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

// import { data } from "./data";

const App = (props) => {
  console.log(props.bookList)
  return (
    <div className="App">
      <h1>
        BookShop
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Redux BookShop
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}


export default connect(mapStateToProps)(App);


