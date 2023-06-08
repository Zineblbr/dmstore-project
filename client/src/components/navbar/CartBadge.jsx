import React from "react";
import { useSelector } from "react-redux";
import "./cartBadge.css";

function CartBadge() {
  const cartItemsCount = useSelector((state) => state.cartItemsCount);

  return (
    <div className="cart__badge">
      <svg
        className="icon icon-cart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 40"
      >
        <title> Shopping bag , ui, ecommerce, marketplace, </title>
        <g data-name="Layer 32">
          <path d="M28.38,8.66A2,2,0,0,0,26.89,8H22A6,6,0,0,0,10,8H5.11a2,2,0,0,0-1.49.66,2,2,0,0,0-.5,1.54L4.83,27.3a3,3,0,0,0,3,2.7H24.19a3,3,0,0,0,3-2.7l1.71-17.1A2,2,0,0,0,28.38,8.66ZM16,4a4,4,0,0,1,4,4H12A4,4,0,0,1,16,4Zm-6,6v2a1,1,0,0,0,2,0V10h8v2a1,1,0,0,0,2,0V10h4.89l-1.4,14h-19L5.11,10ZM24.19,28H7.81a1,1,0,0,1-1-.9L6.71,26H25.29l-.11,1.1A1,1,0,0,1,24.19,28Z"></path>
        </g>
      </svg>
      <span className="cart__badge__count">{cartItemsCount}</span>
    </div>
  );
}

export default CartBadge;
