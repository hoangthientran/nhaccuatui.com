// libs
import React from "react";

// components
import BoxLoginLogoutDropdown from "../../components/BoxLoginLogoutDropdown";
import LoginLogoutWrapper from "../../components/LoginLogoutWrapper";

// others
import "./style.scss";

BoxUserLoginLogout.propTypes = {};

function BoxUserLoginLogout() {
  return (
    <div className="box-user-login-wrap box-user-login-wrap--new">
      <LoginLogoutWrapper />
      <BoxLoginLogoutDropdown />
    </div>
  );
}

export default BoxUserLoginLogout;
