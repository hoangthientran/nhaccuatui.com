// libs
import React, { useContext } from "react";
import { MultilangContext } from "../../../../context/multilang";
// others
import "./style.scss";

function BoxLoginLogoutDropdown() {
  const { handleChangeVN, handleChangeEN } = useContext(MultilangContext);
  return (
    <ul className="box-login-logout-dropdown-wrapper">
      <li className="item-dropdown-inner">
        <ul className="wrap-item-small" style={{ width: "135px" }}>
          <li className="item-small" onClick={handleChangeVN}>
            <span>Vietnamese</span>
          </li>
          <li className="item-small " onClick={handleChangeEN}>
            <span>English</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default BoxLoginLogoutDropdown;
