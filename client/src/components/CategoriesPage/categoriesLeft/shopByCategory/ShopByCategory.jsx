import React from "react";
import "./shopByCategory.css";

function ShopByCategory() {
  return (
    <div className="categories__bloc">
      <h1>Catégorie</h1>
      <ul>
        <li className="categoryLink">Equipement de médecine générale</li>
        <li className="categoryLink">Laboratoire</li>
        <li className="categoryLink">Consommable</li>
        <li className="categoryLink">Immobilier médical</li>
      </ul>
    </div>
  );
}

export default ShopByCategory;
