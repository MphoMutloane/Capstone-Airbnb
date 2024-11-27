import React, { useState } from "react";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    // Handles location selection
    const handleLocationSelect = (location) => {
        setShowDropdown(false); // Close dropdown
        navigate(`/location/${location.toLowerCase()}`); // Navigate to the dynamic location page
    };

    return (
        <div className="banner">
            <div className="banner_search">
                <div className="hotel_text">
                    <h4>Hotels</h4>
                    <p>Select Hotel</p>
                </div>
                <div className="location_picker">
                    <ExpandMoreIcon onClick={() => setShowDropdown(!showDropdown)} className="expandMoreIcon" />
                        {/* Dropdown Menu */}
                {showDropdown && (
                    <div className="dropdown">
                        <p onClick={() => handleLocationSelect("All Locations")}>All Locations</p>
                        <p onClick={() => handleLocationSelect("New York")}>New York</p>
                        <p onClick={() => handleLocationSelect("Paris")}>Paris</p>
                        <p onClick={() => handleLocationSelect("Tokyo")}>Tokyo</p>
                        <p onClick={() => handleLocationSelect("Cape Town")}>Cape Town</p>
                        <p onClick={() => handleLocationSelect("Thailand")}>Thailand</p>
                    </div>
                )}
                </div>
                <span>|</span>
                <div className="check_in_date_picker">
                    <h4>Check In</h4>
                    <p>Add dates</p>
                </div>
                <span>|</span>
                <div className="check_out_date_picker">
                    <h4>Check Out</h4>
                    <p>Add dates</p>
                </div> 
                <span>|</span>
                <div className="guest_picker">
                    <h4>Guests</h4>
                    <p>Add guests</p>
                </div>
                <div className="search_icon_div">
                <SearchIcon />
                </div>
            </div>
            <div className="banner_info">
                <h1>Not sure where to go? Perfect.</h1>
                <Button variant="outlined">I'm flexible.</Button>
            </div>
        </div>
    );
};

export default Banner;
