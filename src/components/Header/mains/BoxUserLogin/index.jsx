import React from "react";
import "./style.scss";

BoxUserLogin.propTypes = {};

function BoxUserLogin() {
  return (
    // Lam lai
    <div className="boxUserLogin">
      <div className="avartarUser">
        <div className="box-avt-wrapper">
          <div className="box-vip-container">
            <p className="txt-vip">Mua VIP</p>
          </div>
        </div>
        <div className="box-thumbnail-user">
          {/* <img src="https://stc-id.nixcdn.com/v11/images/nologin_user.png" className="img-avt-user" alt="img-avt-user" /> */}
        </div>
      </div>
    </div>
  );
}

export default BoxUserLogin;
