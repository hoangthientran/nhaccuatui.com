import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import listSongApi from "../../../../api/listSongApi";

// First, create the thunk
export const listSong = createAsyncThunk("song/listSong", async () => {
  const songs = await listSongApi.getListSong();
  return songs;
});

const menuSlice = createSlice({
  name: "song",
  initialState: {
    dataSong: [],
  },
  reducers: {},
  extraReducers: {
    [listSong.fulfilled]: (state, action) => {
      state.dataSong = action.payload;
    },
  },
});

const { reducer } = menuSlice;
export default reducer;
