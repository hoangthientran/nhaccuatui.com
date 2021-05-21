// libs
import React from "react";
import { infoSearchHistory } from "../../../../mocks";
// others
import "./style.scss";

const InfoSearchHistory = () => (
  <ul className="info-search-history-wrapper">
    {infoSearchHistory.map(({ id, name }) => (
      <li key={id} className="top-search-history">
        <span className="content-search">{name}</span>
        <span className="btn-delete-search">
          <img
            src="https://stc-id.nixcdn.com/v11/images/header_new/ic_delete_new.png"
            alt=""
          />
        </span>
      </li>
    ))}
  </ul>
);

export default InfoSearchHistory;
