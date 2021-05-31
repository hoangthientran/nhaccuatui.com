// libs
import React from "react";
// components
import ThumbnailCircle from "../ThumbnailCircle";
import TextBuyVip from "../TextBuyVip";
// others
import "./style.scss";

const LoginLogoutThumbnail = () => (
  <div className="login-logout-thumbnail-wrapper">
    <ThumbnailCircle />
    <TextBuyVip />
  </div>
);

export default LoginLogoutThumbnail;
