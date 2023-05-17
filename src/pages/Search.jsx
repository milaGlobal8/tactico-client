import React from "react";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";
import SearchNavBar from "../components/search/SearchNavBar";

const Search = () => {
  return (
    <div
      className="search container-fluid p-0 m-0 border-bottom border-dark d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <SearchNavBar />
      <Footer />
    </div>
  );
};

export default Search;
