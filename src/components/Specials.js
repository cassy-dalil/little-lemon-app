import React from "react";
import "../components/styles/specials.css";
import GreekSalad from "./assets/greek salad.jpg";
import Bruschetta from "./assets/bruchetta.svg";
import LemonDessert from "./assets/lemon dessert.jpg";

function Specials() {
    return(
        <section className="specials-container">
            <article className="specials-title-container">
                <h1 className="Specials-title-text">Specials</h1>
                <button className="specials-order-online-button">Order Online</button>
            </article>
            <section className="specials-cards-container">
                <div className="greek-salad-card">
                    <img className="greek-salad-img specials-img" src={GreekSalad} alt="Greek Salad"></img>
                    <h3 className="greek-salad-title specials-title">Greek Salad</h3>
                    <h3 className="greek-salad-price specials-price">$12.99</h3>
                    <p className="greek-salad-description specials-description">Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
                    <button className="order-delivery-button">Order for delivery</button>
                </div>
                <div className="bruschetta-card">
                    <img className="bruschetta-img specials-img" src={Bruschetta} alt="Bruschetta"></img>
                    <h3 className="bruschetta-title specials-title">Bruschetta</h3>
                    <h3 className="bruschetta-price specials-price">$12.99</h3>
                    <p className="bruschetta-description specials-description">Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                    <button className="order-delivery-button">Order for delivery</button>
                </div>
                <div className="lemon-dessert-card">
                    <img className="lemon-dessert-img specials-img" src={LemonDessert} alt="Lemon Dessert"></img>
                    <h3 className="lemon-dessert-title specials-title">Lemon Dessert</h3>
                    <h3 className="lemon-dessert-price specials-price">$12.99</h3>
                    <p className="lemon-dessert-description specials-description">Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
                    <button className="order-delivery-button">Order for delivery</button>
                </div>
            </section>
        </section>
    );
}

export default Specials;