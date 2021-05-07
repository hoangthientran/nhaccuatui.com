import React from "react";
import AlbumHot from "./mains/AlbumHot";
import ListAlbumn from "./mains/ListAlbums";
import ListEntertainment from "./mains/ListEntertainment";
import ListKaraoke from "./mains/ListKaraoke";
import ListSong from "./mains/ListSong";
import MvHot from "./mains/MvHot";
import SlideDefault from "./mains/SlideDefault";
import "./style.scss";

BoxLeft.propTypes = {};

function BoxLeft() {
  return (
    <div className="boxLeft">
      <SlideDefault />
      <ListAlbumn />
      <AlbumHot />
      <MvHot />
      <ListSong />
      <ListKaraoke />
      <ListEntertainment />
    </div>
  );
}

export default BoxLeft;
