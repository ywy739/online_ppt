import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slide } from "../constants/slide";

type State = {
    slides: Slide[];
}

const initialState: State = {
    slides: [
        {index: 0, contents:[]}
    ],
}

const allSlides = createSlice({
    name: 'allSlides.',
    initialState,
    reducers: {
        addSlide(state) {
            console.log('addSlide in all')
            state.slides.push({index: 0, contents:[]});
        },
        changeSlide(state,{payload}: PayloadAction<Slide>){
            console.log('changeSlide in all', payload)
            const {activeEle, editingSlideRef, ...staticSlide} = payload;// 过滤：编辑状态的活跃信息
            state.slides[payload.index] = staticSlide;
        }
    },
  });

  export const {addSlide, changeSlide} = allSlides.actions;
  
  export default allSlides.reducer;
  