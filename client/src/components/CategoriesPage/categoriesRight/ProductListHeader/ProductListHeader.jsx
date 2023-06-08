import React from "react";
import "./ProductListHeader.css";

function ProductListHeader({ sortBy, sortProducts }) {
  return (
    <div>
      <div className="product__list__header">
        <div className="sort__product">
          <label htmlFor="sort__by">Trier par</label>
          <select
            value={sortBy}
            name="sort__by"
            id="sort__by"
            onChange={(e) => sortProducts(e.target.value)}
          >
            <option value="a-z">A à Z</option>
            <option value="z-a">Z à A</option>
            <option value="lowPrice">Prix bas </option>
            <option value="highPrice">Prix élevé</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductListHeader;
