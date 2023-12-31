import React from "react";
import "../components/styles/herosection.css";
import RestaurantFood from "./assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
      <div className="hero-section-container">
        <div className="hero-section-text-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/reservations" className="hero-button">Book a Table</Link>
        </div>
        <img className="restaurant-food-img" src={RestaurantFood} alt="restaurant food"></img>
      </div>
    );
  }

export default HeroSection;