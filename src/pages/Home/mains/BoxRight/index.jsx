// libs
import React from "react";
// components
import BoxChartMusic from "../../components/BoxChartMusic";
import BoxChatMv from "../../components/BoxChatMv";
import BoxTopicMusic from "../../components/BoxTopicMusic";
import Recomment from "../../components/Recomment";
import Top100 from "../../components/Top100";
import Top100Img from "../../components/Top100Img";
import TrendList from "../../components/TrendList";
// others
import "./style.scss";

const BoxRight = () => (
  <div className="box-right-wrapper">
    <TrendList />
    <Recomment />
    <BoxTopicMusic />
    <BoxChartMusic />
    <BoxChatMv />
    <Top100Img />
    <Top100 />
  </div>
);

export default BoxRight;
