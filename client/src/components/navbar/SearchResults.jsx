import React from "react";
import ProductListItem from "../CategoriesPage/categoriesRight/productListItem/ProductListItem.jsx";
import { useLocation } from "react-router-dom";
import "./searchResults.css";

function SearchResults() {
  const location = useLocation();
  const products = location.state?.products || [];
  console.log("Zineb", products);
  if (products.length === 0) {
    return (
      <div className="search__noResult">
        <h1>Votre recherche n'a donné aucun résultat.</h1>
      </div>
    );
  }
  return (
    <div>
      {products.map((product) => (
        <ProductListItem
          key={product._id}
          id={product._id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default SearchResults;
