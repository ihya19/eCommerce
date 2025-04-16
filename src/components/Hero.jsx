import React from 'react';
import './Hero.css';
import { Search, ShoppingBag, Heart, User } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Header Bölümü */}
      <header className="hero-header">
        <h1 className="brand-name">BrandName</h1>

        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/pages">Pages</a>
        </nav>

        <div className="header-right">
          <a href="/login" className="login-link">
            <User size={16} /> Login / Register
          </a>

          <div className="icon-group">
            <Search size={18} className="header-icon" />
            <div className="icon-with-count">
              <ShoppingBag size={18} className="header-icon" />
              <span className="icon-count">1</span>
            </div>
            <div className="icon-with-count">
              <Heart size={18} className="header-icon" />
              <span className="icon-count">1</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Container */}
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="season-tag">SUMMER 2020</div>
          <h1 className="hero-title">IT'S A SPECIAL<br />GIFT</h1>
          <p className="hero-subtitle">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default Hero;
