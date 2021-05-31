// libs
import React, { useContext } from "react";
// context
import { MultilangContext } from "../../../../context/multilang";
// components
import LoginLogoutItem from "../LoginLogoutItem";
// others
import "./style.scss";

const BoxLoginLogoutDropdown = () => {
  const { handleChangeVN, handleChangeEN } = useContext(MultilangContext);
  return (
    <ul className="login-logout-dropdown-wrapper">
      <li className="item-dropdown-inner">
        <LoginLogoutItem
          handleChangeVN={handleChangeVN}
          handleChangeEN={handleChangeEN}
        />
      </li>
    </ul>
  );
};

export default BoxLoginLogoutDropdown;
