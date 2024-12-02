import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./layouts/Header";

const LocationPage = () => {
    const { locationName } = useParams();
    const location = useLocation();
    const { checkInDate, checkOutDate, adults, children } = location.state || {};

    return (
        <>
            <Header />
            <h1>
                {locationName === "all locations"
                    ? "All Locations"
                    : `Hotels in ${locationName}`}
            </h1>
            <p>Check In Date: {checkInDate ? new Date(checkInDate).toDateString() : "Not selected"}</p>
            <p>Check Out Date: {checkOutDate ? new Date(checkOutDate).toDateString() : "Not selected"}</p>
            <p>Adults: {adults}</p>
            <p>Children: {children}</p>
        </>
    );
};

export default LocationPage;


