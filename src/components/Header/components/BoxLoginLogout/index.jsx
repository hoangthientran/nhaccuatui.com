import React from "react";
import "./style.scss";

BoxLoginLogout.propTypes = {};

function BoxLoginLogout() {
  return (
    <ul className="wrap-box-login-logout-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span>Đăng nhập</span>
          </li>
          <li className="item-small ">
            <span>Đăng xuất</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default BoxLoginLogout;
