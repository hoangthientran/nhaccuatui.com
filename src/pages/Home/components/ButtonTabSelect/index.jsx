// libs
import React, { useState } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
// others
import "./style.scss";

const { TabPane } = Tabs;

const ButtonTabSelect = () => {
  const [state] = useState({
    tabPosition: "top",
  });

  const { tabPosition } = state;

  return (
    <Tabs tabPosition={tabPosition}>
      <TabPane tab="Việt Nam" key="1">
        Content of Tab 1
      </TabPane>
      <TabPane tab="Âu Mỹ" key="2">
        Content of Tab 2
      </TabPane>
      <TabPane tab="Hàn Quốc" key="3">
        Content of Tab 3
      </TabPane>
    </Tabs>

    // <div className="btn-tab-select-wrapper">
    //     <p className="btn-tab active">Việt Name</p>
    //     <p className="btn-tab">Âu Mỹ</p>
    //     <p className="btn-tab">Hàn Quốc</p>
    // </div>
  );
};

export default ButtonTabSelect;
