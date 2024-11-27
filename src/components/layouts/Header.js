import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import LanguageIcon from "@mui/icons-material/Language";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Avatar } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* logo link to home page */}
      <Link to="/">
        <img 
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
          className="header_logo" 
          alt="logo" 
        />
      </Link>
      <div className="header_center">
        <p>Places to Stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header_right">
        {/* redirects to login page */}
        <Link to="/login">
         <p className="becomeHost">Become a Host</p>
        </Link>
        <LanguageIcon />
        <DehazeIcon />
        {/* redirects to login page */}
        <Link to="/login" >
         <Avatar />
        </Link>
      </div>
    </div>
  );
};

export default Header;

