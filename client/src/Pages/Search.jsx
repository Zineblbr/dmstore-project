import React from "react";
import SearchResults from "../components/navbar/SearchResults.jsx";

function Search() {
  const products = [];
  return (
    <div>
      <SearchResults products={products} />
    </div>
  );
}

export default Search;
