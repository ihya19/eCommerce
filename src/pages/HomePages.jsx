import React from "react";
import Hero from "../components/Hero"; 
import ShopCards from "../components/ShopCard";
import ProductCard from "../components/ProductsCard"; 
import Features from "../components/Feature";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ShopCards />
      <ProductCard />
      <Features />
      <BlogCard />
      <Clients />
      <Footer />
    </div>
  );
};

export default HomePage;
