// libs
import React from "react";
import { PhoneOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TelephoneSupport = () => (
  <div className="mail-support-wrapper">
    <PhoneOutlined className="icon-mail" />
    <span className="text-email">support@nct.vn</span>
  </div>
);

export default TelephoneSupport;
