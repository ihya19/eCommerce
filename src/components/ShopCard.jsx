import React from "react";
import "./ShopCard.css";

const ShopCards = () => {
  return (
    <div className="shop-cards-container">
      {/* Card 1 */}
      <div className="shop-card card1">
        <p className="shop-card-subtitle">Ends Today</p>
        <h2 className="shop-card-title">
          Elements <br /> Style
        </h2>
        <p className="shop-card-link">Explore Items</p>
      </div>

      {/* Card 2 */}
      <div className="shop-card card2">
        <p className="shop-card-subtitle">Your Space</p>
        <h2 className="shop-card-title">
          Unique <br /> Life
        </h2>
        <p className="shop-card-link">Explore Items</p>
      </div>
    </div>
  );
};

export default ShopCards;
