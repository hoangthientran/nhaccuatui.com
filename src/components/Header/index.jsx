// libs
import React from "react";
// components
import MenuTop from "./mains/MenuTop";
import UserLoginLogout from "./mains/UserLoginLogout";
import IconAction from "./mains/IconAction";
import InputSearch from "./mains/InputSearch";
// others
import "./style.scss";

const Header = () => (
  <div className="menu-header-wrapper">
    <div className="menu-header-inner">
      <MenuTop />
      <UserLoginLogout />
      <IconAction />
      <InputSearch />
    </div>
  </div>
);

export default Header;
