// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const LoginLogoutItem = ({ handleChangeVN, handleChangeEN }) => (
  <ul className="login-logout-item-wrapper" style={{ width: "135px" }}>
    <li className="item-small" onClick={handleChangeVN}>
      <span className="multi-lang">Vietnamese</span>
    </li>
    <li className="item-small " onClick={handleChangeEN}>
      <span className="multi-lang">English</span>
    </li>
  </ul>
);

LoginLogoutItem.propTypes = {
  handleChangeVN: PropTypes.func,
  handleChangeEN: PropTypes.func,
};

LoginLogoutItem.defaultProps = {
  handleChangeEN: null,
  handleChangeVN: null,
};

export default LoginLogoutItem;
