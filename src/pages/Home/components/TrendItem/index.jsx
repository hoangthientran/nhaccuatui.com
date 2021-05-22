// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const TrendItem = ({ listTrend, index }) => (
  <div className="trend-item">
    <img className="img-trend" src={listTrend[index].src} alt="" />
    <div className="trend-info">
      <p className="trend-top-week">Top Nghệ Sĩ Trending Trong Tuần</p>
      <p className="trend-name-singer-title">{listTrend[index].name_singer}</p>
    </div>
  </div>
);

TrendItem.propTypes = {
  listTrend: PropTypes.object,
  index: PropTypes.number,
};

TrendItem.defaultProps = {
  listTrend: {},
  index: 0,
};

export default TrendItem;
