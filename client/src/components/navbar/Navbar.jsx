import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./navbar.css";
import SearchBar from "./SearchBar.jsx";
import CartBadge from "./CartBadge.jsx";
import { useDispatch } from "react-redux";

function Navbar({ cartItemsCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [savedCart, setSavedCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    initializeCart();
  }, []);

  const initializeCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setSavedCart(existingCartItems);

    dispatch({
      type: "UPDATE_CART_ITEMS_COUNT",
      payload: existingCartItems.length,
    });
  };

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <div id="navbar" className="navbar__container">
      <div className="navbar__content">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__right__container">
          <div className="humburger__icon">
            <RxHamburgerMenu
              color="#555555"
              size={27}
              onClick={toggleSidebar}
            />
            {isOpen && (
              <>
                <div className="navbar__menu__container">
                  <p>
                    <Link to="/">
                      <TfiClose
                        className="close__icon"
                        onClick={toggleSidebar}
                      />
                    </Link>
                  </p>
                  <div className="navbar__menu__links">
                    <p>
                      <Link to="/" className="categories">
                        Toutes catégories
                      </Link>
                    </p>
                    <p>
                      <Link to="/">Nouveautés</Link>
                    </p>
                    <p>
                      <Link to="/">Promotion</Link>
                    </p>
                    <p>
                      <Link to="/">Nous contacter</Link>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="navbar__links">
            <p>
              <Link className="catégorie" to="/">
                Toutes catégories
              </Link>
            </p>
            <p>
              <Link to="/">Nouveautés</Link>
            </p>
            <p>
              <Link to="/">Promotion</Link>
            </p>
            <p>
              <Link to="/">Nous contacter</Link>
            </p>
          </div>
          <div className="navbar__end">
            <div className="searchbar__container">
              <SearchBar />
            </div>
            <div className="right__icons">
              <Link to="/Cart">
                <CartBadge cartItemsCount={cartItemCount} />
              </Link>
              <Link to="/Login">
                <svg
                  className="icon icon-profile"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 100 125"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M14.6,94.9h70.8c3.2,0,5.7-2.7,5.7-5.9v-5.3c0-6.9-3.3-13.1-8.8-16.7c0,0,0,0,0,0c-9.6-6.1-15-9.3-18.1-11.1   c5.5-6.1,9-15.5,9-24.9c0-14.9-9.5-25.8-22.6-25.8S28.1,15.9,28.1,30.9c0,9.1,3.4,18.4,8.7,24.5c-4.1,2.2-10.5,6-19.3,11.6   c-5.4,3.6-8.6,9.8-8.6,16.6v5.4C8.9,92.2,11.5,94.9,14.6,94.9z M14.7,83.5c0-4.8,2.3-9.3,6-11.7C29.9,66,40.4,59.7,42.4,59   c1.1-0.2,2-1,2.3-2.1c0.3-1.1-0.1-2.3-1-3.1c-5.7-4.6-9.7-14-9.7-23c0-11.8,6.9-20,16.8-20s16.8,8.2,16.8,20   c0,9.2-4.1,18.8-10,23.3c-0.9,0.7-1.3,1.8-1.1,2.9c0.2,1,1,1.9,2,2.2c1.6,0.7,11.8,6.9,20.7,12.6c3.8,2.5,6.1,7,6.1,11.8v5.3   c0,0.1,0,0.1,0,0.1H14.7c0,0,0-0.1,0-0.1V83.5z"></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
