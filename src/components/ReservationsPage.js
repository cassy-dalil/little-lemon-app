import React from "react";
import "./styles/reservations.css";
import Form from "./Form";

function ReservationsPage() {
    return (
        <div>
            <div className='banner-container'>
                <h1 className="banner-text">Reservations</h1>
            </div>
            <Form />
        </div>
    )
}

export default ReservationsPage;