import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import '../styles/reservations.css';

function Confirmation() {
    return (
        <div>
            <Header />
            <div className='banner-container'>
                <div className="confirmation-container">
                    <h3>Your Reservation is confirmed!</h3>
                    <p>A confirmation message has been sent to you.</p>
                    <p>Thank you for dining with us!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Confirmation;