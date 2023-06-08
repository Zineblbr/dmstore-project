import React from "react";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import "./CartRow.css";
import { Link } from "react-router-dom";

function CartRow(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const itemImagePath = "/image/productImages/";

  const handleQuantity = (type) => {
    if (type === "plus") {
      const updatedQuantity = quantity + 1;
      setQuantity(updatedQuantity);
      updateCartItemQuantity(props.id, updatedQuantity);
    } else if (type === "minus" && quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      updateCartItemQuantity(props.id, updatedQuantity);
    }
    props.onQuantityChange();
  };

  const updateCartItemQuantity = (itemId, updatedQuantity) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCartItems = existingCartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const deleteCartItem = (itemId) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log("existingCartItems = ", existingCartItems);

    const updatedCartItems = existingCartItems.filter(
      (item) => item._id !== itemId
    );
    // console.log("updatedCartItems = ", updatedCartItems);

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.location.href = "/cart";
  };

  return (
    <div className="cardRow__container">
      <div className="cartRow__left">
        <div className="cart__items">
          <Link
            to={{
              pathname: `/ProductCardDetails/${props.id}`,
            }}
          >
            <div className="imgRow__wrapper">
              <img src={itemImagePath + props.image} alt={props.name} />
            </div>
          </Link>
        </div>
      </div>
      <div className="cartRow__right">
        <div className="product__price">
          <h1>{props.name}</h1>

          <p className="price">{props.price} DA</p>
        </div>
        <div className="quantity">
          <div className="quantityButton">
            <button
              className="btn__quantity"
              type="button"
              data-type="minus"
              data-field="quant[1]"
              onClick={() => handleQuantity("minus")}
            >
              -
            </button>
            <input
              type="text"
              id="Quantity-product"
              name="quantity"
              value={quantity}
              className="input-quantity"
              pattern="[0-9]*"
            ></input>
            <button
              className="btn__quantity"
              type="button"
              data-type="plus"
              data-field="quant[1]"
              onClick={() => handleQuantity("plus")}
            >
              +
            </button>
          </div>
        </div>

        <div className="product__total__price">
          <p className="cart_subtotal_price">{props.price * quantity} DA</p>
        </div>
        <div className="cart__remove">
          <p>
            <AiFillCloseSquare
              className="close__icon__cart"
              onClick={() => deleteCartItem(props.id)}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartRow;
