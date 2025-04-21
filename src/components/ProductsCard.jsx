import React from "react";
import "./ProductCard.css";
import plantImage from "../images/a.jpg";
import officeImage from "../images/c.jpg";


const ProductCard = ({ image }) => (
  <div className="product-card">
    <div className="card-image">
      <span className="badge">SALE</span>
      <img src={image} alt="Product" />
      <div className="card-icons">
        <button>♡</button>
        <button>⬇</button>
        <button>🛒</button>
        <button>👁</button>
      </div>
    </div>
    <div className="card-body">
      <div className="language-rating">
        <span className="language">English</span>
        <span className="graphic-design">Graphic Design</span>
      </div>
      <h3 className="title">We focus on ergonomics</h3>
      <p className="desc">and meeting you....</p>
      <div className="sales">15 Sales</div>
      <div className="price">
        <span className="old-price">$16.49</span>
        <span className="new-price">$6.48</span>
      </div>
      <div className="info">
        <span>Phn... 64 Let...</span>
        <span>22th..</span>
      </div>
      <button className="learn-btn">Learn More </button>
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <div className="featured-container">
      <div className="featured-header">
        <p className="small-title">Featured Products</p>
        <h2 className="main-title">Featured Products</h2>
        <p className="subtitle">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics.<br />
          Newtonian mechanics
        </p>
      </div>
      <div className="featured-content">
        <div className="cards-wrapper">
          <ProductCard image={plantImage} />
          <ProductCard image={officeImage} />
        </div>
       
      </div>
    </div>
  );
};

export default FeaturedProducts;