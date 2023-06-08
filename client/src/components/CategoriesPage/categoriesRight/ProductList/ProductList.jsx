import React, { useEffect, useState } from "react";
import "./productList.css";
import ProductListItem from "../productListItem/ProductListItem";
import ProductListHeader from "../ProductListHeader/ProductListHeader.jsx";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        if (isMounted) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const sortProducts = (sortType) => {
    let sortedProducts = [...products];

    if (sortType === "a-z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "z-a") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "lowPrice") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "highPrice") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <div>
        <ProductListHeader sortProducts={sortProducts} />
      </div>
      <div className="product__wrapper">
        {products.length > 0 ? (
          <div className="product-list">
            {products.map((product) => (
              <ProductListItem
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
