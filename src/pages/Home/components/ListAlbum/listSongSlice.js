import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";
import listSongApi from "../../../../api/listSongApi";

// First, create the thunk
export const listSong = createAsyncThunk("song/listSong", async () => {
  // const [filters, setFilters] = useState({ _page: 1, _limit: 5 });
  const filters = { _page: 1, _limit: 5 };
  // console.log(typeof setFilters);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const listSongToDay = await listSongApi.getListSong(filters);
  //       console.log(listSongToDay);
  //       // setKaraokeList(data);
  //       // setPagination(pagination);
  //       // return listSongToDay;
  //     } catch (error) {
  //       console.log("Failed to fetch cooporation list:", error);
  //     }
  //   })();
  // }, [filters]);
  const songs = await listSongApi.getListSong(filters);
  console.log(songs);
  console.log(songs.data);
  return songs.data;
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
