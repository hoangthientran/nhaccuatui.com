// libs
import React from "react";
// components
import ItemDropdown from "../ItemDropdown";
// others
import "./style.scss";

const MenuSongDropdown = () => (
  <ul className="menu-song-dropdown-wrapper">
    <li className="menu-dropdown-inner">
      <ItemDropdown />
    </li>
  </ul>
);

export default MenuSongDropdown;
