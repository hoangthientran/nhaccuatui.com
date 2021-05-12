// libs
import React from "react";
// others
import "./style.scss";

BoxLoginLogoutDropdown.propTypes = {};

function BoxLoginLogoutDropdown() {
  return (
    <ul className="box-login-logout-dropdown-wrapper">
      <li className="item-dropdown-inner">
        <ul className="wrap-item-small" style={{ width: "135px" }}>
          <li className="item-small">
            <span>Đăng nhập</span>
          </li>
          <li className="item-small ">
            <span>Đăng ký</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default BoxLoginLogoutDropdown;
