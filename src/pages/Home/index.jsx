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
    <div className="home-wrapper">
      <div className="home-wrapper-inner">
        <BoxLeft />
        <BoxRight />
      </div>
    </div>
  );
}

export default Home;
