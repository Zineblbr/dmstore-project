import React from "react";
import { Link } from "react-router-dom";
import "./shopByBrand.css";

function ShopByBrand() {
  return (
    <div className="brand__bloc">
      <h1>Acheter par marque</h1>
      <ul>
        <li>
          <Link className="brand">PIC</Link>
        </li>
        <li>
          <Link className="brand">OMRON</Link>
        </li>
        <li>
          <Link className="brand">FUJI</Link>
        </li>
        <li>
          <Link className="brand">BECTON DICKINSON</Link>
        </li>
        <li>
          <Link className="brand">BIOSYNEX</Link>
        </li>
      </ul>
    </div>
  );
}

export default ShopByBrand;
