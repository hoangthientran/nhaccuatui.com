import React from "react";
import BoxAction from "./mains/BoxAction";
import BoxSearch from "./mains/BoxSearch";
import BoxUserLogin from "./mains/BoxUserLogin";
import MenuTop from "./mains/MenuTop";
import "./style.scss";

Header.propTypes = {};

function Header() {
  return (
    <header>
      <div className="menu-header">
        <div className="menu-header__wrap">
          <div className="contentWrap">
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
