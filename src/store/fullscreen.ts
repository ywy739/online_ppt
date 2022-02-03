import { BackwardFilled } from "@ant-design/icons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    isShowSlide: boolean;
    index: number;// 放映中的幻灯片
}

const initialState: State = {
    isShowSlide: false,
    index: 0,
}

const fullscreen = createSlice({
    name: 'fullscreen',
    initialState,
    reducers: {
        setFullscreen(state, { payload }: PayloadAction<boolean>) {
            state.isShowSlide = payload;
            state.index = 0;// 从头放映
        },
        forward(state) {
            if(state.index) {
                state.index-=1;
            };
        },
        backward(state) {
            state.index+=1;
        }
    },
  });

  export const {setFullscreen, forward, backward} = fullscreen.actions;
  
  export default fullscreen.reducer;
  