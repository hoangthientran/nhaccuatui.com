import React from "react";
import "./style.scss";

ChartDropdown.propTypes = {};

function ChartDropdown() {
  return (
    <ul className="wrap-chart-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">Việt Nam</li>
          <li className="item-small ">
            <span>Âu Mỹ</span>
          </li>
          <li className="item-small ">
            <span>Hàn Quốc</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default ChartDropdown;
