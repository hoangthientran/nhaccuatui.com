import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import listSongApi from "../../../../api/listSongApi";

// First, create the thunk
export const listSong = createAsyncThunk("user/listSong", async () => {
  const data = await listSongApi.getAll();
  console.log(data);

  return data;
});

export const listSongSlice = createAsyncThunk(
  "user/listSongSlice",
  async (payload) => {
    const { data } = await listSongApi.getAll(payload);
    console.log(data);

    return data;
  }
);

const menuSlice = createSlice({
  name: "song",
  initialState: {
    listSong: {},
  },
  reducer: {},
  // /
});

const { reducer } = menuSlice;
export default reducer;
