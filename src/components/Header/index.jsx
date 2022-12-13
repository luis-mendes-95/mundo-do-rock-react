import React from "react";
import * as headers from "../../styles/headers";
import logo from "../../assets/img/logo_big.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <headers.Header_app>
      <headers.Img_logo src={logo} />
      <headers.Nav_header_menu>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "gray",
            borderRadius: "8px",
            padding: "5px 5px",
          }}
        >
          HOME
        </Link>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "gray",
            borderRadius: "8px",
            padding: "5px 5px",
          }}
        >
          LOGIN
        </Link>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "gray",
            borderRadius: "8px",
            padding: "5px 5px",
          }}
        >
          CADASTRAR
        </Link>
      </headers.Nav_header_menu>
    </headers.Header_app>
  );
};

export default Header;
