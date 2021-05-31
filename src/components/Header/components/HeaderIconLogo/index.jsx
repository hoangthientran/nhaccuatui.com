// libs
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const HeaderIconLogo = () => (
  <li className="header-icon-logo-menu-wrapper">
    <Link to="/">
      <img
        className="icon-logo-menu"
        src="https://stc-id.nixcdn.com/v11/images/header_new/logo_new.png"
        alt="img"
      />
    </Link>
  </li>
);

export default HeaderIconLogo;
