// libs
import React from "react";
// components
import { contentTopKeyWord } from "../../../../mocks";
// others
import "./style.scss";

const ContentTopKeyWord = () => (
  <div className="content-top-keyword-wrapper">
    {contentTopKeyWord.map((item) => (
      <span key={item.id} className="content-keyword">
        {item.name}
      </span>
    ))}
  </div>
);
export default ContentTopKeyWord;
