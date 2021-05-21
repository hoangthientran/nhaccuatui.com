// libs
import React from "react";
import PropTypes from "prop-types";
// components
import SlideDefault from "../../components/SlideDefault";
import ListAlbum from "../../components/ListAlbum";
import SongHot from "../../components/SongHot";
import MvHot from "../../components/MvHot";
import ListSong from "../../components/ListSong";
import ListKaraoke from "../../components/ListKaraoke";
import ListEntertainment from "../../components/ListEntertainment";
// others
import "./style.scss";

const BoxLeft = ({ defaultLanguage }) => (
  <div className="box-left-wrapper">
    <SlideDefault />
    <ListAlbum defaultLanguage={defaultLanguage} />
    <SongHot defaultLanguage={defaultLanguage} />
    <MvHot defaultLanguage={defaultLanguage} />
    <ListSong defaultLanguage={defaultLanguage} />
    <ListKaraoke defaultLanguage={defaultLanguage} />
    <ListEntertainment defaultLanguage={defaultLanguage} />
  </div>
);

BoxLeft.propTypes = {
  defaultLanguage: PropTypes.object,
};

BoxLeft.defaultProps = {
  defaultLanguage: {},
};

export default BoxLeft;
