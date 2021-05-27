// libs
import React from "react";
// components
import { contentTopKeyWord } from "../../../../mocks";
// others
import "./style.scss";

const ContentTopKeyWord = () => (
  <div className="content-top-keyword-wrapper">
    {contentTopKeyWord.map(({ id, name }) => (
      <span key={id} className="content-keyword">
        {name}
      </span>
    ))}
  </div>
);
export default ContentTopKeyWord;
