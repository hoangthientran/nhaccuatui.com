// libs
import React from "react";
// mocks
import InfoNameKaraokeThumbnailSmall from "../InfoNameKaraokeThumbnailSmall";
// components
import ThumbnailKaraoke from "../ThumbnailKaraoke";
// others
import "./style.scss";

const KaraokeSmall = ({ karaokeList }) =>
  karaokeList.map((item) => (
    <div className="karaoke-small-wrapper" key={item.id}>
      <ThumbnailKaraoke item={item} />
      <InfoNameKaraokeThumbnailSmall item={item} />
    </div>
  ));

export default KaraokeSmall;
