import React from 'react';
import './Feature.css';
import { CreditCard } from 'lucide-react'; 

const featuresData = [
  {
    title: "Easy to use",
    text: "Things on a very small that you have any direct",
  },
  {
    title: "Secure Payment",
    text: "Safe and encrypted payment method via credit cards",
  },
  {
    title: "Quick Setup",
    text: "Start accepting payments in minutes",
  },
];

const FeatureCard = ({ title, text }) => (
  <div className="feature-card">
    <div className="icon-circle">
      <CreditCard size={20} color="white" /> 
    </div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-row">
        <div className="column column1">
          <div className="red-line" />
          <h2>
            Featured <br /> Products
          </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <a href="/" className="learn-more">
            Learn More →
          </a>
        </div>
        <div className="column column2">
          {featuresData.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
        <div className="column column3">
          {featuresData.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
