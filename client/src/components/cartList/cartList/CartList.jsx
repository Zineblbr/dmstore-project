import React, { useEffect, useState } from "react";
import CartRow from "../cartRow/CartRow.jsx";

function CartList(props) {
  const [savedCart, setSavedCart] = useState([]);
  const { onQuantityChange } = props;

  useEffect(() => {
    initializeCart();
  }, []);

  const initializeCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setSavedCart(existingCartItems);
  };
  return (
    <div>
      {savedCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart__list">
          {savedCart.map((product) => (
            <CartRow
              key={product._id}
              id={product._id}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
              image={product.image}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CartList;
