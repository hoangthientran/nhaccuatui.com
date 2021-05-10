import React from "react";
import "./style.scss";

Song.propTypes = {};

function Song() {
  return (
    <div className="box-content-music-list">
      <div className="info-song">
        <div>
          <img
            alt="img-song"
            src="https://avatar-ex-swe.nixcdn.com/song/2021/05/06/e/0/1/8/1620313689543.jpg"
          />
        </div>
        <div>
          <h3 className="name-song">Răng khôn</h3>
          <div className="name-single-under">RIN9</div>
        </div>
      </div>
      <span className="icon_listen">12.441</span>
      <div className="box-song-actions">
        <span className="button-add-playlist"></span>
        <span className="button-playing"></span>
      </div>
    </div>
  );
}

export default Song;
