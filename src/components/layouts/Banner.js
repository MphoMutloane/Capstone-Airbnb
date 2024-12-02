import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Banner.css";
import BigCard from '../../assets/images/Big_Card.png';

const Banner = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guestDropdown, setGuestDropdown] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/locations/all-locations", {
            state: { checkInDate, checkOutDate, adults, children },
        });
    };

    const handleLocationSelect = (location) => {
        navigate(`/locations/${location}`, {
            state: { checkInDate, checkOutDate, adults, children },
        });
    };

    return (
        <div className="banner">
            <div className="banner_search">
                <div className="hotel_text">
                    <h4>Hotels</h4>
                    <p>Select Hotel</p>
                </div>
                <div className="location_picker">
                    <ExpandMoreIcon
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="expandMoreIcon"
                    />
                    {showDropdown && (
                        <div className="dropdown">
                            <p onClick={() => navigate("/locations/all-locations", 
                                { state: { checkInDate, checkOutDate, adults, children } })}>
                                All Locations
                            </p>
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
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="Add dates"
                        className="date_picker"
                    />
                </div>
                <span>|</span>
                <div className="check_out_date_picker">
                    <h4>Check Out</h4>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        placeholderText="Add dates"
                        className="date_picker"
                    />
                </div>
                <span>|</span>
                <div className="guest_picker">
                    <h4 onClick={() => setGuestDropdown(!guestDropdown)}>Guests</h4>
                    <p>{adults + children} Guests</p>
                    {guestDropdown && (
                        <div className="guest_dropdown">
                            <div className="guest_option">
                                <h5>Adults</h5>
                                <div className="guest_counter">
                                    <button onClick={() => setAdults(Math.max(1, adults - 1))}>
                                        -
                                    </button>
                                    <span>{adults}</span>
                                    <button onClick={() => setAdults(adults + 1)}>+</button>
                                </div>
                            </div>
                            <div className="guest_option">
                                <h5>Children</h5>
                                <div className="guest_counter">
                                    <button onClick={() => setChildren(Math.max(0, children - 1))}>
                                        -
                                    </button>
                                    <span>{children}</span>
                                    <button onClick={() => setChildren(children + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="search_icon_div" onClick={handleSearch}>
                    <SearchIcon />
                </div>
            </div>
            <div className="banner_image">
                <img src={BigCard} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;

