import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";

BoxSearch.propTypes = {};

function BoxSearch() {
  return (
    <div className="box-search">
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
    </div>
  );
}

export default BoxSearch;
