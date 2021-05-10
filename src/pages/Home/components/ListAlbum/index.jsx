import React from "react";
import ThumbnailAlbum from "../ThumbnailAlbum";
import { RightOutlined } from "@ant-design/icons";
import "./style.scss";

ListAlbum.propTypes = {};

function ListAlbum() {
  return (
    <div className="listAlbum">
      <div className="title-album">
        <h2>NGHE GÌ HÔM NAY</h2>
        <span className="icon-right">
          <RightOutlined />
        </span>
      </div>
      <ul>
        <li>
          <ThumbnailAlbum />
          <div className="info-album">
            <span className="name-albumn">
              Mother's Love: Mother's Day Songs
            </span>
          </div>
        </li>
        <li>
          <ThumbnailAlbum />
          <div className="info-album">
            <span className="name-albumn">
              Mother's Love: Mother's Day Songs
            </span>
          </div>
        </li>
        <li>
          <ThumbnailAlbum />
          <div className="info-album">
            <span className="name-albumn">
              Mother's Love: Mother's Day Songs
            </span>
          </div>
        </li>
        <li>
          <ThumbnailAlbum />
          <div className="info-album">
            <span className="name-albumn">
              Mother's Love: Mother's Day Songs
            </span>
          </div>
        </li>
        <li>
          <ThumbnailAlbum />
          <div className="info-album">
            <span className="name-albumn">
              Mother's Love: Mother's Day Songs
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListAlbum;
