// libs
import React from "react";
import PropTypes from "prop-types";
import { CustomerServiceOutlined, PlayCircleOutlined } from "@ant-design/icons";
// dataSources
import { formatNumber } from "../../../../mocks";
// others
import "./style.scss";

function ActionInfoThumbnail({ item }) {
  return (
    <div className="action-info">
      <div className="view-listion">
        <span className="icon-listen">
          <CustomerServiceOutlined />
        </span>
        <span className="number"> {formatNumber(item.number)} </span>
      </div>
      <span className="icon_play">
        <PlayCircleOutlined />
      </span>
    </div>
  );
}

ActionInfoThumbnail.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnail.defaultProps = {
  item: {},
};

export default ActionInfoThumbnail;
