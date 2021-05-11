// libs
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

// others
import "./style.scss";

FormSearch.propTypes = {};

function FormSearch() {
  return (
    <form>
      <div className="box-search__action">
        <span className="icon-search">
          <SearchOutlined />
        </span>
        <input
          type="text"
          className="input-search"
          placeholder="Tìm bài hát, video, playlist, ca sĩ"
        />
      </div>
    </form>
  );
}

export default FormSearch;
