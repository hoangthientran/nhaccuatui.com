import React from "react";
import BoxChartMusic from "./mains/BoxChartMusic";
import BoxChatMv from "./mains/BoxChatMv";
import BoxTopicMusic from "./mains/BoxTopicMusic";
import Recomment from "./mains/Recomment";
import Top100 from "./mains/Top100";
import TrendList from "./mains/TrendList";
import "./style.scss";

BoxRight.propTypes = {};

function BoxRight() {
  return (
    <div className="boxRight">
      <TrendList />
      <Recomment />
      <BoxTopicMusic />
      <BoxChartMusic />
      <BoxChatMv />
      <Top100 />
    </div>
  );
}

export default BoxRight;
