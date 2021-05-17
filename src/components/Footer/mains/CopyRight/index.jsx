// libs
import React from "react";
// components
import AddressCompany from "../../components/AddressCompany";
import MailSupport from "../../components/MailSupport";
import TelephoneSupport from "../../components/TelephoneSupport";
import BoxTxtRight from "../../components/BoxTxtRight";
// others
import "./style.scss";

const CopyRight = () => (
  <div className="copy-right-wrapper">
    <div className="copy-right">
      <AddressCompany />
      <MailSupport />
      <TelephoneSupport />
      <BoxTxtRight />
    </div>
  </div>
);

export default CopyRight;
