// libs
import React, { useContext, useState } from "react";
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
  const [statusMenu, setMenuStatus] = useState(true);

  window.addEventListener("scroll", () => {
    const menu = document.querySelector(".header-menu-wrapper");
    if (window.pageYOffset > 100) {
      if (statusMenu) {
        setMenuStatus(false);
        menu.classList.add("header-menu-hide");
      }
    } else if (window.pageYOffset < 100) {
      if (statusMenu === false) {
        setMenuStatus(true);
        menu.classList.remove("header-menu-hide");
      }
    }
  });

  return (
    <div className="header-menu-wrapper" style={{ backgroundColor: color }}>
      <div className="header-menu-wrapper-inner">
        <MenuTop />
        <UserLoginLogout />
        <IconAction />
        <InputSearch />
      </div>
    </div>
  );
};

export default Header;
