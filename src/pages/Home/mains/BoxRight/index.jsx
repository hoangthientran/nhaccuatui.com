// libs
import React from "react";
import PropTypes from "prop-types";
// components
import TrendList from "../../components/TrendList";
import Recomment from "../../components/Recomment";
import BoxTopicMusic from "../../components/BoxTopicMusic";
import BoxChartMusic from "../../components/BoxChartMusic";
import BoxChatMv from "../../components/BoxChatMv";
import Top100Img from "../../components/Top100Img";
import Top100 from "../../components/Top100";
// others
import "./style.scss";

const BoxRight = ({ defaultLanguage }) => (
  <div className="box-right-wrapper">
    <TrendList />
    <Recomment />
    <BoxTopicMusic defaultLanguage={defaultLanguage} />
    <BoxChartMusic defaultLanguage={defaultLanguage} />
    <BoxChatMv defaultLanguage={defaultLanguage} />
    <Top100Img />
    <Top100 />
  </div>
);

BoxRight.propTypes = {
  defaultLanguage: PropTypes.object,
};

BoxRight.defaultProps = {
  defaultLanguage: {},
};

export default BoxRight;
