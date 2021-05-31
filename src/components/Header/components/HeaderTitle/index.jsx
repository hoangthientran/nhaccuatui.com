// libs
import React from "react";
// components
import MenuSongDropdown from "../MenuSongDropdown";
// mocks
import { titleHeader } from "../../../../mocks";
// others
import "./style.scss";

const HeaderTitle = () =>
  titleHeader.map(({ id, name }) => (
    <li key={id} className="item item--song">
      <span className="text-title">{name}</span>
      <MenuSongDropdown />
    </li>
  ));

export default HeaderTitle;
