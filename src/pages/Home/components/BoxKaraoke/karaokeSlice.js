// libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// api
import karaokeApi from "../../../../api/karaokeApi";
// constants
import Storekeys from "../../../../constants/storagekey";

export const karaoke = createAsyncThunk("listKaraoke/karaoke", async (page) => {
  const filters = { _page: page, _limit: 4 };
  const listKaraoke = await karaokeApi.getListKaraoke(filters);
  // console.log(listKaraoke.data);
  localStorage.setItem(Storekeys.KARAOKES, JSON.stringify(listKaraoke.data));
  return listKaraoke.data;
});

const karaokeSlice = createSlice({
  name: "listKaraoke",
  initialState: {
    current: JSON.parse(localStorage.getItem(Storekeys.KARAOKES)) || [],
  },
  reducer: {},
  extraReducers: {
    [karaoke.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = karaokeSlice;
export default reducer;
