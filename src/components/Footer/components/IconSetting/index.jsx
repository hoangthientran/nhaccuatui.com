// libs
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const IconSetting = () => (
  <>
    <label htmlFor="nav-pc-input" className="icon-setting">
      <SettingOutlined />
    </label>
    <input type="checkbox" hidden className="nav-input" id="nav-pc-input" />
    <label htmlFor="nav-pc-input" className="nav-overlay"></label>
  </>
);

export default IconSetting;
