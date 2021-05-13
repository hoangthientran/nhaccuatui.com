// libs
import React from "react";

// components
import FormSearch from "../../components/FormSearch";
import SuggestionDropdown from "../../components/SuggestionDropdown";

// others
import "./style.scss";

BoxSearch.propTypes = {};

function BoxSearch() {
  return (
    <div className="box-search-wrap">
      <div className="box-search">
        <FormSearch />
        <SuggestionDropdown />
      </div>
    </div>
  );
}

export default BoxSearch;
