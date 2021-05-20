// libs
import React from "react";
import ItemDropdown from "../ItemDropdown";
// others
import "./style.scss";

MenuSongDropdown.propTypes = {};

function MenuSongDropdown() {
  return (
    <ul className="menu-song-dropdown-wrapper">
      <li className="menu-dropdown-inner">
        <ItemDropdown />
      </li>
    </ul>
  );
}

export default MenuSongDropdown;
