import React, { useState } from "react";
import NavBar from "../browse/NavBar";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
////trang search voi thanh phan nav va phan tim kiem
const Search = () => {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <SearchForm />
        <ResultList />
      </main>
    </div>
  );
};

export default Search;
