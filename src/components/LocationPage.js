import React from "react";
import { useParams } from "react-router-dom";

const LocationPage = () => {
    const { locationName } = useParams();

    return (
        <div>
            <h1>{locationName === "all locations" ? "All Locations" : `Hotels in ${locationName}`}</h1>
            {/* Add logic to display relevant hotel information here */}
        </div>
    );
};

export default LocationPage;
