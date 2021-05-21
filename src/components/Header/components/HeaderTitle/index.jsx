// libs
import React from "react";
// mocks
import { titleHeader } from "../../../../mocks";
// components
import MenuSongDropdown from "../MenuSongDropdown";
// others
import "./style.scss";

const HeaderTitle = () =>
  titleHeader.map((item) => (
    <li key={item.id} className="item item--song">
      <span className="text-title">{item.name}</span>
      <MenuSongDropdown />
    </li>
  ));

export default HeaderTitle;
