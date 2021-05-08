import React from "react";
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";

import "./style.scss";

Home.propTypes = {};

function Home() {
  return (
    <div className="boxContent">
      <div className="wrap">
        <div className="contentWrap">
          <BoxLeft />
          <BoxRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
