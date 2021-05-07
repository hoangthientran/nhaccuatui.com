import React from "react";
import BoxAction from "./mains/BoxAction";
import BoxSearch from "./mains/BoxSearch";
import BoxUserLogin from "./mains/BoxUserLogin";
import MenuTop from "./mains/MenuTop";
import "./style.scss";

Header.propTypes = {};

function Header() {
  return (
    <div className="menuHeader">
      <div className="wrap">
        <div className="contentWrap">
          <MenuTop />
          <BoxUserLogin />
          <BoxAction />
          <BoxSearch />
        </div>
      </div>
    </div>
  );
}

export default Header;
