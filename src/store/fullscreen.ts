import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Boolean = false

const fullscreen = createSlice({
    name: 'fullscreen',
    initialState,
    reducers: {
        setFullscreen(state, { payload }: PayloadAction<boolean>) {
            state = payload;
        },
    },
  });
  
  export default fullscreen.reducer;
  