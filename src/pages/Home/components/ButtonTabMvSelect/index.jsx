// libs
import { Tabs } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
// components
import ContentMvVN from "../ContentMvVN";
// others
import "./style.scss";

const { TabPane } = Tabs;

const ButtonTabMvSelect = () => {
  const [state] = useState({
    tabPosition: "top",
  });
  const { tabPosition } = state;

  return (
    <div className="btn-tab-select-wrapper">
      <Tabs tabPosition={tabPosition}>
        <TabPane tab="Việt Nam" key="1">
          <ContentMvVN />
        </TabPane>
        <TabPane tab="Âu Mỹ" key="2">
          <ContentMvVN />
        </TabPane>
        <TabPane tab="Hàn Quốc" key="3">
          <ContentMvVN />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ButtonTabMvSelect;
