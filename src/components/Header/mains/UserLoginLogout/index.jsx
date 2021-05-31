// libs
import React from "react";
// components
import LoginLogoutThumbnail from "../../components/LoginLogoutThumbnail";
import BoxLoginLogoutDropdown from "../../components/BoxLoginLogoutDropdown";
// others
import "./style.scss";

const UserLoginLogout = () => (
  <div className="user-login-logout-wrapper user-login-logout-wrapper--new">
    <LoginLogoutThumbnail />
    <BoxLoginLogoutDropdown />
  </div>
);

export default UserLoginLogout;
