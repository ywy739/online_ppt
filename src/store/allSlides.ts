import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slide } from "../constants/slide";

type State = {
    slides: Slide[];
}
const initial = [
    {index: 0, contents:[]}
]
const initialState: State = {
    slides: initial
}

const allSlides = createSlice({
    name: 'allSlides.',
    initialState,
    reducers: {
        addSlide(state) {
            console.log('addSlide in all', state.slides)
            state.slides.push({index: state.slides.length, contents:[]});
        },
        changeSlide(state,{payload}: PayloadAction<Slide>){
            console.log('changeSlide in all', payload)
            const {activeEle, editingSlideRef, ...staticSlide} = payload;// 过滤：编辑状态的活跃信息
            state.slides[payload.index] = staticSlide;
        },
        deleteSlide(state, {payload}: PayloadAction<number>) {
            console.log('deleteSlide in all', state.slides)
            if(state.slides.length === 1) {
                state.slides= initial;
                return ;
            }
            state.slides.splice(payload, 1);
            state.slides = state.slides.map((slide, index) => {
                return {...slide, index}
            })
        },
        copySlide(state, {payload}: PayloadAction<number>) {
            console.log('copySlide in all', state.slides)
            state.slides.splice(payload, 0, state.slides[payload]);
            state.slides = state.slides.map((slide, index) => {
                return {...slide, index}
            })
        },
    },
  });

  export const {addSlide, changeSlide, deleteSlide, copySlide} = allSlides.actions;
  
  export default allSlides.reducer;
  