// libs
import React from "react";
import { MailOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const MailSupport = () => (
  <div className="mail-support-wrapper">
    <MailOutlined className="icon-mail" />
    <span className="text-email-support">support@nct.vn</span>
  </div>
);

export default MailSupport;
