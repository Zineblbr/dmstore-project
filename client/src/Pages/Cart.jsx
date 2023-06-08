// import React from "react";
import CartList from "../components/cartList/cartList/CartList.jsx";
import React, { useEffect, useState } from "react";
import "./cart.css";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  const calculateTotalPrice = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const totalPrice = existingCartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );

    setTotalPrice(totalPrice);
    setCartItemCount(existingCartItems.length);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  return (
    <>
      <CartList onQuantityChange={calculateTotalPrice} />

      <div class="order_summary">
        <p class="cart_total_price">
          <span class="cart__total__title">Montant global :</span>

          <span className="cart__total">{totalPrice} DA</span>
        </p>
      </div>
    </>
  );
}

export default Cart;
