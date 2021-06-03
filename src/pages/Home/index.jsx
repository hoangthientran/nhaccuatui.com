// libs
import React from "react";
// components
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";
// others
import "./style.scss";

Home.propTypes = {};

function Home() {
  return (
    <div className="box-content-wrapper">
      <div clafssName="box-content-wrapper-inner">
        <BoxLeft />
        <BoxRight />
      </div>
    </div>
  );
}

export default Home;
