import React from "react";
import "./toutesCatégories.css";
import ShopByCategory from "../components/CategoriesPage/categoriesLeft/shopByCategory/ShopByCategory.jsx";
import ShopByPrice from "../components/CategoriesPage/categoriesLeft/shopByPrice/ShopByPrice.jsx";
import ShopByBrand from "../components/CategoriesPage/categoriesLeft/shopByBrand/ShopByBrand.jsx";
import ProductList from "../components/CategoriesPage/categoriesRight/ProductList/ProductList.jsx";

function ToutesCatégories() {
  return (
    <div className="categories__container">
      <div className="left__side">
        <ShopByCategory />
        <ShopByPrice />
        <ShopByBrand />
      </div>
      <div className="right__side">
        <ProductList />
      </div>
    </div>
  );
}

export default ToutesCatégories;
