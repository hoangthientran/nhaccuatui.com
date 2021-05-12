// libs
import React from "react";
import { CustomerServiceOutlined, PlayCircleOutlined } from "@ant-design/icons";
// dataSources
import { formatPrice, listContentSongToday } from "../../../../mocks";
// others
import "./style.scss";

ListSongToday.propTypes = {};

function ListSongToday() {
  return (
    <ul className="list-song-today-wrapper">
      {listContentSongToday.map((item) => (
        <li key={item.id} className="list-song-today">
          <div className="thumbnail-album-wrapper">
            <div className="action-info">
              <div className="view-listion">
                <span className="icon-listen">
                  <CustomerServiceOutlined />
                </span>
                <span className="number"> {formatPrice(item.number)} </span>
              </div>
              <span className="icon_play">
                <PlayCircleOutlined />
              </span>
            </div>
            <span className="avatar">
              <img
                className="avatar-img"
                src={item.src_main}
                alt="mother's love: mother's day songs - v.a"
              />
            </span>
          </div>
          <div className="info-name-song-today-wrapper">
            <span className="info-name-song-today">{item.name_song}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListSongToday;
