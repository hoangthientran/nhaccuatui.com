// libs
import React from "react";
// components
import ThumbnailKaraoke from "../ThumbnailKaraoke";
import InfoNameKaraokeThumbnailSmall from "../InfoNameKaraokeThumbnailSmall";
// mocks
import { listKaraoke } from "../../../../mocks";
// others
import "./style.scss";

const KaraokeSmall = () =>
  listKaraoke.map((item) => (
    <div className="karaoke-small-wrapper" key={item.id}>
      <ThumbnailKaraoke item={item} />
      <InfoNameKaraokeThumbnailSmall item={item} />
    </div>
  ));

export default KaraokeSmall;
