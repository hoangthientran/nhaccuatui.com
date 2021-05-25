// libs
import React from "react";
// components
import ThumbnailEntertainment from "../ThumbnailEntertainment";
import InfoNameEntertaimentThumbnailSmall from "../InfoNameEntertaimentThumbnailSmall";
// mocks
import { listEntertainment } from "../../../../mocks";
// others
import "./style.scss";

const EntertainmentSmall = () =>
  listEntertainment.map((item) => (
    <div className="entertainment-small-wrapper" key={item.id}>
      <ThumbnailEntertainment item={item} />
      <InfoNameEntertaimentThumbnailSmall item={item} />
    </div>
  ));

export default EntertainmentSmall;
