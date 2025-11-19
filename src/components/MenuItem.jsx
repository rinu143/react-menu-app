import React from "react";
import "./MenuItem.css";

const MenuItem = ({ name, category, price, description, isVegetarian }) => {
  return (
    <div className="menu-item-card">
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-category">{category}</p>
      <p className="menu-item-description">{description}</p>
      <div className="menu-item-details">
        <span className="menu-item-price">${price.toFixed(2)}</span>
        {isVegetarian ? (
          <span className="vegetarian-badge">🌱 Vegetarian</span>
        ) : (
          <span className="non-vegetarian-badge">🍗 Non Vegetarian</span>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
