// libs
import React from "react";
import HeaderIconLogo from "../../components/HeaderIconLogo";
import HeaderNewVersion from "../../components/HeaderNewVersion";
import HeaderTitle from "../../components/HeaderTitle";

// others
import "./style.scss";

const MenuTop = () => (
  <div className="header-menu-top-wrapper">
    <ul className="menu-top-inner">
      <HeaderIconLogo />
      <HeaderNewVersion />
      <HeaderTitle />
    </ul>
  </div>
);

export default MenuTop;
