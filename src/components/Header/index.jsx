// libs
import React from "react";
// components
import BoxAction from "./mains/BoxAction";
import BoxSearch from "./mains/BoxSearch";
import BoxUserLoginLogout from "./mains/BoxUserLoginLogout";
import MenuTop from "./mains/MenuTop";
// others
import "./style.scss";

const Header = () => (
  <header>
    <div className="menu-header-wrap">
      <div className="menu-header">
        <div className="menu-header__content">
          <MenuTop />
          <BoxUserLoginLogout />
          <BoxAction />
          <BoxSearch />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
