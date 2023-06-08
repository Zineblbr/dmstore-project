import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="subscribe__header">
        <h2>ABONNEZ-VOUS MAINTENANT</h2>
        <h1>Recevez rapidement nos mises à jour</h1>
        <h2>VOS DONNÉES PERSONNELLES SERONT CONSERVÉES EN SÉCURITÉ</h2>
      </div>
      <div className="subscribe__input">
        <input type="email" placeholder="Votre adresse e-mail" />
        <button>
          <MdKeyboardArrowRight size={27} />
        </button>
      </div>
      <div className="footer_links">
        <p>
          <NavLink to="/" className="categories">
            Toutes catégories
          </NavLink>
        </p>
        <p>
          <NavLink to="/">Nouveautés</NavLink>
        </p>
        <p>
          <NavLink to="/">Promotion</NavLink>
        </p>
        <p>
          <NavLink to="/">Nous contacter</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Footer;
