import React from "react";
import "./styles/testimonials.css";

function Testimonials() {
    return(
        <section className="testimonials-container">
            <h2 className="testimonials-title">Testimonials</h2>
            <section className="testimonials-text">
                <div className="testimonial-card">
                    <p className="testimonial-message">This is the best Mediterranean food that I've ever had!</p>
                    <p className="testimonial-name">- Michael Scott</p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-message">The food here is delicious and fresh!</p>
                    <p className="testimonial-name">- Jimmy John</p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-message">My family loves dining in the Little Lemon restaurant because of the tasty food and great service.</p>
                    <p className="testimonial-name">- Nancy Drew</p>
                </div>
                <div className="testimonial-card">
                    <p className="testimonial-message">The entire menu here is fire! Def would recommend to anybody!</p>
                    <p className="testimonial-name">- Zach Long</p>
                </div>
            </section>
        </section>
    )
}

export default Testimonials;