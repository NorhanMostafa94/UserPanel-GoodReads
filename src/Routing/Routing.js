import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../Component/MyBooks/MainPage";

import CategoriesList from "../Component/Categories/List";
import Category from "../Component/Categories/Category";

import AuthorsList from "../Component/Authors/List";
import AuthorDetails from "../Component/Authors/Details";

import BooksList from "../Component/Books/List";
import BookDetails from "../Component/Books/Details";

import Login from "../Component/Forms/login";
import SignForm from "../Component/Forms/SignUp";
import Books from "../Component/Search/BooksList";
// import NavBar from "../Component/shared/Navbar";

const Routing = () => {
  return (
    <Switch>
      
      {/* <Route exact path="/mybooks" component={NavBar} /> */}
      <Route exact path="/"  component={Login} />
      {/* <Route exact path="/books/:bookid" component={BookDetails}></Route> */}
      <Route path="/books/:id" component={BookDetails} />
      <Route path="/categories/:id" component={Category} />
      <Route path="/authors/:id" component={AuthorDetails} />
      <Route path="/categories" component={CategoriesList} />
      <Route path="/authors" component={AuthorsList} />
      <Route path="/books" component={BooksList} />
      <Route exact path="/home" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup"  component={SignForm} />
      <Route path="/results" component={Books} />

      {/* <Route path='/' component={SearchBar} /> */}
    </Switch>
  );
};
export default Routing;
