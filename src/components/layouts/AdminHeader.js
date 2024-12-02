import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Avatar } from "@mui/material";
import { useUser } from "../admin/userContext"; // Import useUser
import "./AdminHeader.css";

const AdminHeader = () => {
  const { user } = useUser(); // Get user from context

  return (
    <div className="admin_header">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          className="admin_header_logo"
          alt="logo"
        />
      </Link>
      <div className="admin_header_right">
        <Link to="/login">
          <p className="admin_become_host">
            {user ? `Hello, ${user}` : "Hello. Sign In."}
          </p>
        </Link>
        <LanguageIcon />
        <DehazeIcon />
        <Link to="/login">
          <Avatar />
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
