// libs
import React from "react";

// others
import "./style.scss";

TopicOtherDropdown.propTypes = {};

function TopicOtherDropdown() {
  return (
    <ul className="wrap-topic-other-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span>Khám phá</span>
          </li>
          <li className="item-small ">
            <span>Nghệ sĩ</span>
          </li>
          <li className="item-small ">
            <span>Tin tức âm nhạc</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default TopicOtherDropdown;
