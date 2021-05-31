// libs
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
// components
import ChangeColor from "../ChangeColor";
// other
import "./style.scss";

const NavPc = () => (
  <div className="nav-pc">
    <label htmlFor="nav-pc-input" className="nav-pc-close">
      <CloseOutlined />
    </label>
    <h3 className="name-title-color">Màu Chủ Đề</h3>
    <ChangeColor />
  </div>
);

export default NavPc;
