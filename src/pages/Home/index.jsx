import React from "react";
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";

import "./style.scss";

Home.propTypes = {};

function Home() {
  return (
    <div className="box-content-wrap">
      <div className="wrap">
        <div className="content-wrap">
          <BoxLeft />
          <BoxRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
