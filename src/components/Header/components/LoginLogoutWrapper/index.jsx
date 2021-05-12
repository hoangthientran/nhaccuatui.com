// libs
import React from "react";
// others
import "./style.scss";

LoginLogoutWrapper.propTypes = {};

function LoginLogoutWrapper() {
  return (
    <div className="login-logout-wrapper">
      <div className="box-thumbnail">
        <img
          className="thumbnail"
          src="https://stc-id.nixcdn.com/v11/images/nologin_user.png"
          alt=""
        />
      </div>
      <div className="box-vip">
        <p className="txt-vip">Mua VIP</p>
      </div>
    </div>
  );
}

export default LoginLogoutWrapper;
