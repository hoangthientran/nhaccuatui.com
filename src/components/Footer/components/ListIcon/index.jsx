// libs
import React from "react";
// mocks
import { listIcon } from "../../../../mocks";
// others
import "./style.scss";

const ListIcon = () => (
  <div className="list-icon-wrapper">
    {listIcon.map((item) => (
      <img key={item.id} className="l-icon" src={item.src} alt="img" />
    ))}
  </div>
);

export default ListIcon;
