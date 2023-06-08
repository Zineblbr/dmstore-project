import React from "react";
import "./productListItem.css";
import { Link } from "react-router-dom";

function ProductListItem(props) {
  const itemImagePath = "/image/productImages/";

  return (
    <div className="card__container">
      <Link
        to={{
          pathname: `/ProductCardDetails/${props.id}`,
        }}
      >
        {" "}
        <div className="img__wrapper">
          <img src={itemImagePath + props.image} alt={props.name} />
        </div>
      </Link>
      <div className="product__info">
        <h2>{props.name}</h2>
        <div className="product__price">
          <p className="price">{props.price} DA</p>
        </div>
        <div className="product__quantity">
          <p className="quantity">{props.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
