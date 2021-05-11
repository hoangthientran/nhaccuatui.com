// libs
import React from "react";

// components
import BoxLoginLogout from "../../components/BoxLoginLogout";

// others
import "./style.scss";

BoxUserLogin.propTypes = {};

function BoxUserLogin() {
  return (
    <div className="box-user-login-wrap box-user-login-wrap--new">
      <div className="box">
        <div className="box__thumbnail">
          <img
            className="thumbnail"
            src="https://stc-id.nixcdn.com/v11/images/nologin_user.png"
            alt=""
          />
        </div>
        <div className="box__vip">
          <p className="txt-vip">Mua VIP</p>
        </div>
      </div>
      <BoxLoginLogout />
    </div>
  );
}

export default BoxUserLogin;
