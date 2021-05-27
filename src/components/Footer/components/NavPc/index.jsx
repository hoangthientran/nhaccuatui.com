// libs
import React, { useContext } from "react";
import { CloseOutlined } from "@ant-design/icons";
// context
import { ThemeContext } from "../../../../context/ThemeContext";
// other
import "./style.scss";

const NavPc = () => {
  const { changeColor } = useContext(ThemeContext);
  return (
    <div className="nav-pc">
      <label htmlFor="nav-pc-input" className="nav-pc-close">
        <CloseOutlined />
      </label>
      <h3 className="name-title-color">Màu Chủ Đề</h3>
      <ul className="nav-pc-list">
        <li
          onClick={changeColor}
          className="color-item"
          style={{ backgroundColor: "#f7c6f7" }}
        ></li>
      </ul>
    </div>
  );
};

export default NavPc;
