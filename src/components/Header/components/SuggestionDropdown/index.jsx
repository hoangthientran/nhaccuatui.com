// libs
import React from "react";
// components
import TopKeySearch from "../TopKeySearch";
import TopKeywordHistory from "../TopKeyWordHistory";
// others
import "./style.scss";

const SuggestionDropdown = () => (
  <div className="suggestion-wrapper">
    <TopKeySearch />
    <TopKeywordHistory />
  </div>
);

export default SuggestionDropdown;
