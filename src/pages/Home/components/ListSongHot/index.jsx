// libs
import React from "react";
import { CustomerServiceOutlined, PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";
// mock
import { formatPrice, listContentSongHot } from "../../../../mocks";

ListSongHot.propTypes = {};

function ListSongHot() {
  return (
    <ul className="list-song-hot-wrapper">
      {listContentSongHot.map((item) => (
        <li key={item.id} className="list-song-hot">
          <div className="thumbnail-album-wrapper">
            <div className="action-info">
              <div className="view-listion">
                <span className="icon-listen">
                  <CustomerServiceOutlined />
                </span>
                <span className="number-listen">
                  {" "}
                  {formatPrice(item.number)}{" "}
                </span>
              </div>
              <span className="icon_play">
                <PlayCircleOutlined />
              </span>
            </div>
            <span className="avatar">
              <img
                className="img-avatar"
                src={item.src_main}
                alt="mother's love: mother's day songs - v.a"
              />
            </span>
          </div>
          <div className="info-song-wrapper">
            <h3 className="name-song">{item.name_song}</h3>
            <h4 className="name-author">{item.name_author}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListSongHot;
