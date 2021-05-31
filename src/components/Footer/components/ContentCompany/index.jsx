// libs
import React from "react";
// components
import NameCompany from "../NameCompany";
// mocks
import { contentCompany } from "../../../../mocks";
// others
import "./style.scss";

const ContentCompany = () => (
  <div className="content-company-wrapper">
    <NameCompany />
    {contentCompany.map(({ id, name }) => (
      <p className="t-detail" key={id}>
        {name}
      </p>
    ))}
  </div>
);

export default ContentCompany;
