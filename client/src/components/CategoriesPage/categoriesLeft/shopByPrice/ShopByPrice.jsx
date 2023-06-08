import React from "react";
import { Link } from "react-router-dom";
import "./shopByPrice.css";

function ShopByPrice() {
  return (
    <div className="price__bloc">
      <h1>Acheter par prix</h1>
      <ul>
        <li>
          <Link className="price__range">1DA - 5KDA</Link>
        </li>
        <li>
          <Link className="price__range">5KDA - 10KDA</Link>
        </li>
        <li>
          <Link className="price__range">10KDA - 50KDA</Link>
        </li>
        <li>
          <Link className="price__range">50KDA - 100KDA</Link>
        </li>
        <li>
          <Link className="price__range">50KDA - 300KDA</Link>
        </li>
      </ul>
    </div>
  );
}

export default ShopByPrice;
