import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    isShowSlide: boolean;
}

const initialState: State = {
    isShowSlide: false,
}

const fullscreen = createSlice({
    name: 'fullscreen',
    initialState,
    reducers: {
        setFullscreen(state, { payload }: PayloadAction<boolean>) {
            state.isShowSlide = payload;
        },
    },
  });

  export const {setFullscreen} = fullscreen.actions;
  
  export default fullscreen.reducer;
  