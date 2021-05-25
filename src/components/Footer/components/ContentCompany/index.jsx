// libs
import React from "react";
// components
import NameCompany from "../NameCompany";
// mocks
import { contentCompany } from "../../../../mocks/Home/Footer";
// others
import "./style.scss";

const ContentCompany = () => (
  <div className="content-company-wrapper">
    <NameCompany />
    {contentCompany.map((item) => (
      <p className="t-detail" key={item.id}>
        {item.name}
      </p>
    ))}
  </div>
);

export default ContentCompany;
