import React from "react";
import "./AddToCartModal.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const AddToCartModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal")) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <AiFillCloseSquare className="close__modal__cart" />
        </span>
        <h2>Produit ajouté au panier</h2>
        <p>Le produit a été ajouté au panier avec succès.</p>

        <NavLink to="/cart">
          <button className="card__submit__btn">
            <span>Voir le panier</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCartModal;
