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
          <li className="item-small">
            <span onClick={handleChangeVN}>Đăng nhập</span>
          </li>
          <li className="item-small ">
            <span onClick={handleChangeEN}>Đăng ký</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default BoxLoginLogoutDropdown;
