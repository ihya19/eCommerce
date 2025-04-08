import React from 'react';
import './Hero.css';
import { Search, ShoppingBag, Heart, User } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero">
      <header className="hero-header">
        <div className="brand-name">BrandName</div>
        <nav className="hero-nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/pages">Pages</a>
          <div className="auth-section">
            <a href="/login" className="auth-link">
              <User size={16} /> Login
            </a>
            <span className="divider">/</span>
            <a href="/register" className="auth-link">
              Register
            </a>
            <div className="icon-group">
              <Search size={18} className="icon" />
              <Heart size={18} className="icon" />
              <ShoppingBag size={18} className="icon" />
            </div>
          </div>
        </nav>
      </header>
      
      <div className="hero-content">
        <div className="season-tag">SUMMER 2020</div>
        <h1 className="hero-title">IT'S A SPECIAL<br />GIFT</h1>
        <p className="hero-subtitle">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="shop-now-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Hero;