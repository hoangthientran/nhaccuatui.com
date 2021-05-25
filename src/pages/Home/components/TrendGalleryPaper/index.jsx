// libs
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// others
import "./style.scss";

const TrendGalleryPaper = ({
  listTrend,
  activeDefault,
  setIndex,
  setActiveDefault,
}) => (
  <div className="trend-gallery-paper">
    <ul className="list-image">
      {listTrend.map((item, index) => (
        <li className="trend-dot-circle" key={item.id}>
          <img
            onMouseEnter={() => {
              setIndex(index);
              setActiveDefault(item.src);
            }}
            className={classnames({
              "img-dot": true,
              active: activeDefault === item.src,
            })}
            src={item.src}
            alt={item.name_singer}
          />
        </li>
      ))}
    </ul>
  </div>
);

TrendGalleryPaper.propTypes = {
  listTrend: PropTypes.array,
};

TrendGalleryPaper.defaultProps = {
  listTrend: [],
};

export default TrendGalleryPaper;
