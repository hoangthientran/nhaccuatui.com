import React from "react";
import "./style.scss";
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";

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
