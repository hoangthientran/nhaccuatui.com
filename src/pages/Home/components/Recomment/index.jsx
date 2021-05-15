// libs
import React from "react";
// components
import ImgRecomment from "../ImgRecomment";
import TitleRecomment from "../TitleRecomment";
import TextDetailRecomment from "../TextDetailRecomment";
import ButtonPlayList from "../ButtonPlayList";
// others
import "./style.scss";

const Recomment = () => (
  <div className="recomment-wrapper">
    <ImgRecomment />
    <TitleRecomment />
    <TextDetailRecomment />
    <ButtonPlayList />
  </div>
);

export default Recomment;
