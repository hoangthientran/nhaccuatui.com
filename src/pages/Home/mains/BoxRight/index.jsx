import React from "react";
import BoxChartMusic from "../../components/BoxChartMusic";
import BoxChatMv from "../../components/BoxChatMv";
import BoxTopicMusic from "../../components/BoxTopicMusic";
import Recomment from "../../components/Recomment";
import Top100 from "../../components/Top100";
import TrendList from "../../components/TrendList";
import "./style.scss";

BoxRight.propTypes = {};

function BoxRight() {
  return (
    <div className="box-right">
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
