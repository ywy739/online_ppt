import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Slide, Ele} from '../constants/slide'

const initialState: Slide = {
    index: 0,
    contents: [],
    activeEle: 0, // 编辑中的元素
}

const editingSlide = createSlice({
    name: 'editingSlide',
    initialState,
    reducers: {
        setEditingSlide(state, { payload }: PayloadAction<Slide>) {
            console.log('setSlide in editing', payload)
            state.index = payload.index;
            state.contents = payload.contents;
        },
        addEle(state, { payload }: PayloadAction<Ele>) {
            state.contents.push(defaultElement[payload]);
            state.activeEle = state.contents.length - 1; //新增元素处于激活态
        },
        selectEle(state, { payload }: PayloadAction<number>) {
            state.activeEle = payload;
        },
        changeEleStyle(state, {payload}: PayloadAction<any>) {
            const {activeEle} = state;
            state.contents[activeEle!].style = payload;
        },
    },
  });

  export const {setEditingSlide, addEle, selectEle, changeEleStyle} = editingSlide.actions;
  
  export default editingSlide.reducer;

// 定制元素对应默认的样式
  const defaultElement = {
    [Ele.Text] : {type: 'text', style: {}},
    [Ele.Img] : {type: 'img', style: {}},
  }
  