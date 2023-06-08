import React from "react";
import ProductCardDetails from "../components/CategoriesPage/categoriesRight/productCard/ProductCardDetails.jsx";

function productDetails(props) {
  const product = props.location.state.product;
  return (
    <div>
      <ProductCardDetails
        key={product._id}
        name={product.name}
        description={product.description}
        price={product.price}
        image={product.image}
        saller={product.saller}
      />
    </div>
  );
}

export default productDetails;
