import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Search query:", query);
    console.log("hello");
    try {
      const response = await axios.get(
        `http://localhost:3000/products/search`,
        {
          params: { query },
        }
      );

      const data = response.data;
      console.log("Search API response:", data);

      if (data.success) {
        const products = data.products;
        console.log("Search results:", products);
        navigate("/Search", { state: { products } });
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la recherche :", error);
    }
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    handleSearch(event);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher"
          id="searchbar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="searchbar" className="search__btn">
          <svg
            className="icon icon-search"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 64 80"
            enableBackground="new 0 0 64 64"
            xmlSpace="preserve"
            onClick={handleSearchButtonClick}
          >
            <path d="M57.7,55.6L44.8,40.7c2.9-3.8,4.7-8.6,4.7-13.8c0-12.5-10.2-22.6-22.6-22.6C14.4,4.3,4.2,14.4,4.2,26.9s10.2,22.6,22.6,22.6  c5.5,0,10.5-2,14.5-5.2l12.6,14.6c0.5,0.6,1.2,0.9,1.9,0.9c0.6,0,1.2-0.2,1.6-0.6C58.5,58.2,58.6,56.7,57.7,55.6z M9.2,26.9  c0-9.7,7.9-17.6,17.6-17.6c9.7,0,17.6,7.9,17.6,17.6s-7.9,17.6-17.6,17.6C17.2,44.5,9.2,36.6,9.2,26.9z"></path>
          </svg>
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
