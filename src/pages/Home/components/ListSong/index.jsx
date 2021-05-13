import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./style.scss";
import Song from "../Song";

ListSong.propTypes = {};

function ListSong() {
  return (
    <div className="wrap-list-song">
      <div className="title-mv">
        <h2>BÀI HÁT</h2>
        <span className="icon-right">
          <RightOutlined />
        </span>
      </div>
      <ul className="list-song">
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
        <li className="item-song">
          <Song />
        </li>
      </ul>
    </div>
  );
}

export default ListSong;
