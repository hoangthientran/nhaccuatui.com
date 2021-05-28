// libs
import React, { useContext } from "react";
// components
import MenuTop from "./mains/MenuTop";
import UserLoginLogout from "./mains/UserLoginLogout";
import IconAction from "./mains/IconAction";
import InputSearch from "./mains/InputSearch";
// contexts
import { ThemeContext } from "../../context/ThemeContext";
// others
import "./style.scss";

const Header = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div className="menu-header-wrapper" style={{ backgroundColor: color }}>
      <div className="menu-header-inner">
        <MenuTop />
        <UserLoginLogout />
        <IconAction />
        <InputSearch />
      </div>
    </div>
  );
};

export default Header;
