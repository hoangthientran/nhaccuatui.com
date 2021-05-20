import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../pages/Home/components/ListSongToday/listSongSlice";

const rootReducer = {
  song: songReducer,
};

// setup redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
