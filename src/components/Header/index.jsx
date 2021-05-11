// libs
import React from "react";

// components
import BoxAction from "./mains/BoxAction";
import BoxSearch from "./mains/BoxSearch";
import BoxUserLogin from "./mains/BoxUserLogin";
import MenuTop from "./mains/MenuTop";

// others
import "./style.scss";

Header.propTypes = {};

function Header() {
  return (
    <header>
      <div className="menu-header-wrap">
        <div className="menu-header">
          <div className="menu-header__content">
            <MenuTop />
            <BoxUserLogin />
            <BoxAction />
            <BoxSearch />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
