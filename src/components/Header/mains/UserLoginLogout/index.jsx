// libs
import React from "react";

// components
import BoxLoginLogoutDropdown from "../../components/BoxLoginLogoutDropdown";
import LoginLogoutThumbnail from "../../components/LoginLogoutThumbnail";

// others
import "./style.scss";

const UserLoginLogout = () => (
  <div className="user-login-wrapper user-login-wrapper--new">
    <LoginLogoutThumbnail />
    <BoxLoginLogoutDropdown />
  </div>
);

export default UserLoginLogout;
