import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./layouts/Header";
import "./LocationDetails.css";

const LocationDetails = () => {
    const location = useLocation();
    const { src, title, text, info, rating, review, price } = location.state || {};

    return (
        <div className="locationDetails">
            <Header />
            <h1>location details</h1>
            {/* <img src={src} alt={title} className="locationDetails_image" />
            <h1>{title}</h1>
            <p>{text}</p>
            <p>{info}</p>
            <p>{rating} ⭐ ({review} reviews)</p>
            <h2>${price} / night</h2> */}
        </div>
    );
};

export default LocationDetails;
