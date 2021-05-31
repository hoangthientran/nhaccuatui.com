import { configureStore } from "@reduxjs/toolkit";
import songTodayReducer from "../pages/Home/components/ListSongToday/songTodaySlice";
import karaokeReducer from "../pages/Home/components/BoxKaraoke/karaokeSlice";

const rootReducer = {
  listSongToday: songTodayReducer,
  listKaraoke: karaokeReducer,
};

// setup redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
