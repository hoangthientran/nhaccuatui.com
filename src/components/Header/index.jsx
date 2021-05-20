// libs
import React from "react";
// components
import MenuTop from "./mains/MenuTop";
import BoxUserLoginLogout from "./mains/BoxUserLoginLogout";
import BoxAction from "./mains/BoxAction";
import BoxSearch from "./mains/BoxSearch";
// others
import "./style.scss";

const Header = () => (
  <div className="menu-header-wrapper">
    <div className="menu-header__content">
      <MenuTop />
      <BoxUserLoginLogout />
      <BoxAction />
      <BoxSearch />
    </div>
  </div>
);

export default Header;
