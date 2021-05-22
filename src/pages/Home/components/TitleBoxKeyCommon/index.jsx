// libs
import React from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TitleBoxKeyCommon = ({ nameLanguage }) => (
  <div className="title-box-key-common-wapper">
    <h2 className="title-common">{nameLanguage}</h2>
    <span className="icon-right-common">
      <PlayCircleOutlined style={{ marginTop: "11px", fontSize: "31px" }} />
    </span>
  </div>
);

TitleBoxKeyCommon.propTypes = {
  nameLanguage: PropTypes.string,
};

TitleBoxKeyCommon.defaultProps = {
  nameLanguage: "",
};

export default TitleBoxKeyCommon;
