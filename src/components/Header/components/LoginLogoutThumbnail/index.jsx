// libs
import React from "react";
// components
import TextBuyVip from "../TextBuyVip";
import ThumbnailCircle from "../ThumbnailCircle";
// others
import "./style.scss";

const LoginLogoutThumbnail = () => (
  <div className="login-logout-thumbnail-wrapper">
    <ThumbnailCircle />
    <TextBuyVip />
  </div>
);

export default LoginLogoutThumbnail;
