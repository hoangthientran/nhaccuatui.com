// libs
import React from "react";
// components
import IconFormSearch from "../InconFormSearch";
import InputFormSearch from "../InputFormSearch";
import SuggestionDropdown from "../SuggestionDropdown";
// others
import "./style.scss";

const FormSearch = () => (
  <form>
    <div className="form-search-wrapper">
      <IconFormSearch />
      <InputFormSearch />
      <SuggestionDropdown />
    </div>
  </form>
);

export default FormSearch;
