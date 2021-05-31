// libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// api
import songTodayApi from "../../../../api/songTodayAPI";
// constants
import Storekeys from "../../../../constants/storagekey";

// First, create the thunk
export const songToday = createAsyncThunk(
  "listSongToday/songToday",
  async (page) => {
    const filters = { _page: page, _limit: 5 };
    const listSongToday = await songTodayApi.getSongTodayApi(filters);
    localStorage.setItem(
      Storekeys.SONGTODAY,
      JSON.stringify(listSongToday.data)
    );
    return listSongToday.data;
  }
);

const songTodaySlice = createSlice({
  name: "listSongToday",
  initialState: {
    current: JSON.parse(localStorage.getItem(Storekeys.SONGTODAY)) || {},
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
