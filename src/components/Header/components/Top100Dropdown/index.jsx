import React from "react";
import "./style.scss";

Top100Dropdown.propTypes = {};

function Top100Dropdown() {
  return (
    <ul className="wrap-top100-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">Việt Nam</li>
          <li className="item-small ">
            <span>Âu Mỹ</span>
          </li>
          <li className="item-small ">
            <span>Hàn Quốc</span>
          </li>
          <li className="item-small ">
            <span>Châu Á</span>
          </li>
          <li className="item-small ">
            <span>Không lời</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Top100Dropdown;
