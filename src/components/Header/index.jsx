// libs
import React from "react";
// components
import HeaderMenuTop from "./mains/HeaderMenuTop";
import BoxUserLoginLogout from "./mains/BoxUserLoginLogout";
import BoxAction from "./mains/BoxAction";
import BoxSearch from "./mains/BoxSearch";
// others
import "./style.scss";

const Header = () => (
  <div className="menu-header-wrap">
    <div className="menu-header-inner">
      <HeaderMenuTop />
      <BoxUserLoginLogout />
      <BoxAction />
      <BoxSearch />
    </div>
  </div>
);

export default Header;
