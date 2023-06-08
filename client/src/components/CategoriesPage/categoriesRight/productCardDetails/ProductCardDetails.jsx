import React from "react";
import { useParams } from "react-router-dom";
import "./productCardDetails.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import AddToCartModal from "../../../cartList/addToCartModal/AddToCartModal.jsx";

function ProductCardDetails() {
  const [quantity, setQuantity] = useState(1);
  const itemImagePath = "/image/productImages/";
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        // console.log("productId:", productId);
        const response = await axios.get(
          `http://localhost:3000/products/${productId}`
        );
        if (isMounted) {
          setProduct(response.data.product);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [productId]);

  const addToCart = () => {
    const cartItem = {
      _id: product._id,
      name: product.name,
      quantity: quantity,
      image: product.image,
      price: product.price,
    };

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingCartItem = existingCartItems.find(
      (item) => item._id === cartItem._id
    );

    if (existingCartItem) {
      existingCartItem.quantity += cartItem.quantity;
    } else {
      existingCartItems.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    setModalOpen(true);

    dispatch({
      type: "UPDATE_CART_ITEMS_COUNT",
      payload: existingCartItems.length,
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product__detail__container">
      {!product ? (
        <p>Il n'y a aucun produit</p>
      ) : (
        <div className="product__detail__wrapper">
          <div className="product__img">
            <img src={itemImagePath + product.image} alt={product.name} />
          </div>
          <div className="product__description">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="product__details__price">
              <h2>Prix:</h2>
              <p className="price">{product.price} DA</p>
            </div>
            <div className="product__details__brand">
              <h2>Marque:</h2>
              <p>{product.saller}</p>
            </div>
            <div className="quantity">
              <h2>Quantity:</h2>
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
            <button className="card__submit__btn" onClick={addToCart}>
              Ajouter au panier
            </button>
            {modalOpen && (
              <AddToCartModal isOpen={modalOpen} onClose={closeModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCardDetails;
