// libs
import React, { useState } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
// components
import ContentVN from "../ContentVN";
import ContentUK from "../ContentUK";
import ContentKorea from "../ContentKorea";
// others
import "./style.scss";

const { TabPane } = Tabs;

const ButtonTabSongSelect = () => {
  const [state] = useState({ tabPosition: "top" });
  const { tabPosition } = state;

  return (
    <div className="button-tab-song-select-wrapper">
      <Tabs tabPosition={tabPosition}>
        <TabPane tab="Việt Nam" key="1">
          <ContentVN />
        </TabPane>
        <TabPane tab="Âu Mỹ" key="2">
          <ContentUK />
        </TabPane>
        <TabPane tab="Hàn Quốc" key="3">
          <ContentKorea />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ButtonTabSongSelect;
