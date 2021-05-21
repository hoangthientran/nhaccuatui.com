// libs
import React from "react";
// mocks
import { textKeySearch } from "../../../../mocks";
// others
import "./style.scss";

const InfoSearchKeyword = () => (
  <ul className="info-search-wrapper">
    {textKeySearch.map(({ id, color, name }) => (
      <li key={id} className="top-search-inner">
        <span className="number-stt" style={{ color: `${color}` }}>
          {id}
        </span>
        <span className="">{name}</span>
      </li>
    ))}
  </ul>
);

export default InfoSearchKeyword;
