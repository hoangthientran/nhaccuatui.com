// libs
import React, { useContext } from "react";
// components
import BoxLeft from "./mains/BoxLeft";
import BoxRight from "./mains/BoxRight";
// context
import { MultilangContext } from "../../context/multilang";
// others
import "./style.scss";

const Home = () => {
  const { defaultLanguage } = useContext(MultilangContext);
  return (
    <div className="box-content-wrapper">
      <div className="box-content-wrapper-inner">
        <BoxLeft defaultLanguage={defaultLanguage} />
        <BoxRight defaultLanguage={defaultLanguage} />
      </div>
    </div>
  );
};

export default Home;
