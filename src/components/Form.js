import React from 'react';
import "./styles/reservations.css";
import {useForm} from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    telephone: yup.string().required("Telephone is a required field!").matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number must match the form 233 00 000 0000"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
    date: yup.string().required("Please select date and time!"),
});

function Form() {
    const {handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(errors);

    const formSubmit = (data) => {
        console.table(data)
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date"/>
            <label for="res-time">Choose time</label>
            <input type='time'></input>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            <label for="occasion">Occasion</label>
            <select id="occasion">
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Celebration</option>
                <option>Other</option>
            </select>
            <label for="rest-firstname">First Name</label>
            <input type="text" placeholder='First Name'></input>
            <label for="rest-lastname">Last Name</label>
            <input type="text" placeholder='Last Name'></input>
            <label for="rest-phone">Phone Number</label>
            <input type="number" placeholder='(xxx)xxx-xxxx'></input>
            <label for="rest-email">Email</label>
            <input type="text" placeholder='Email'></input>
            <label for="rest-comments">Additional Comments:</label>
            <textarea type="text" placeholder='Additional Comments'></textarea>
            <Link type="submit" className='reserve-table-button' to='/confirmation'>Reserve Table!</Link>
        </form>
    )
}

export default Form;