// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailMvSmall from "../ThumbnailMvSmall";
import InfoDataMvSmall from "../InfoDataMvSmall";
// others
import "./style.scss";

const RankMv = ({ item }) => (
  <>
    <ThumbnailMvSmall item={item} />
    <InfoDataMvSmall item={item} />
  </>
);

RankMv.propTypes = {
  item: PropTypes.object,
};

RankMv.defaultProps = {
  item: {},
};

export default RankMv;
