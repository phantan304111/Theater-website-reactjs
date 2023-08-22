import React from "react";
import Banner from "./Banner";
import Content from "./content";
import NavBar from "./NavBar";
// trang chinh
//
function Browse() {
  return (
    <div className="app">
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <Content />
      </main>
    </div>
  );
}

export default Browse;
