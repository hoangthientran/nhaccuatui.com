// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const TitleKeywordSearch = ({ title }) => (
  <h3 className="title-top-keyword">{title}</h3>
);

TitleKeywordSearch.propTypes = {
  title: PropTypes.string,
};

TitleKeywordSearch.defaultProps = {
  title: "",
};

export default TitleKeywordSearch;
