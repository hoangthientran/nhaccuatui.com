// libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// api
// import listSongApi from "../../../../api/listSongApi";
import songTodayApi from "../../../../api/songTodayAPI";

// First, create the thunk
export const songToday = createAsyncThunk(
  "listSongToday/songToday",
  async (page) => {
    const filters = { _page: page, _limit: 5 };
    const listSong = await songTodayApi.getSongTodayApi(filters);
    return listSong.data;
  }
);

const songTodaySlice = createSlice({
  name: "listSongToday",
  initialState: {
    current: [],
  },
  reducers: {},
  extraReducers: {
    [songToday.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = songTodaySlice;
export default reducer;
