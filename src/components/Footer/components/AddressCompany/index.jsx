// libs
import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const AddressCompany = () => (
  <div className="address-company-wrapper">
    <EnvironmentOutlined className="icon-address" />
    <p className="address-company">
      Tầng 19, Tòa nhà The 678 Tower, Số 67 đường Hoàng Văn Thái, phường Tân
      Phú, quận 7, TP HCM.
    </p>
  </div>
);

export default AddressCompany;
