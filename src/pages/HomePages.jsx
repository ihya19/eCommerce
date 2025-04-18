import React from "react";
import Hero from "../components/Hero"; 
import ShopCards from "../components/ShopCard";
import ProductCard from "../components/ProductsCard"; 
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ShopCards />
      <ProductCard />
    </div>
  );
};

export default HomePage;
