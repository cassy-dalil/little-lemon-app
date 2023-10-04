import React from "react";
import "../components/styles/herosection.css";
import RestaurantFood from "./assets/restauranfood.jpg";

function HeroSection() {
    return (
      <div className="hero-section-container">
        <div className="hero-section-text-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Book a Table</button>
        </div>
        <img className="restaurant-food-img" src={RestaurantFood} alt="restaurant food"></img>
      </div>
    );
  }

export default HeroSection;