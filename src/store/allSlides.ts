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
            console.log('addSlide in all', state.slides)
            state.slides.push({index: 0, contents:[]});
        },
        changeSlide(state,{payload}: PayloadAction<Slide>){
            console.log('changeSlide in all', payload)
            const {activeEle, editingSlideRef, ...staticSlide} = payload;// 过滤：编辑状态的活跃信息
            state.slides[payload.index] = staticSlide;
        },
        deleteSlide(state, {payload}: PayloadAction<number>) {
            console.log('deleteSlide in all', state.slides)
            state.slides.splice(payload, 1);
        },
        copySlide(state, {payload}: PayloadAction<number>) {
            console.log('copySlide in all', state.slides)
            state.slides.splice(payload, 0, state.slides[payload]);
        },
    },
  });

  export const {addSlide, changeSlide, deleteSlide, copySlide} = allSlides.actions;
  
  export default allSlides.reducer;
  