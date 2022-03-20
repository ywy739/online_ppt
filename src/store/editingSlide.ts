import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Slide, Ele} from '../constants/slide'

type MoveElePayload = {
    index: number,
    x: number,
    y: number,
}
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
            state.activeEle = 0;
        },
        addEle(state, { payload }: PayloadAction<Ele>) {
            console.log('addE in editing', payload)
            state.contents.push(defaultElement[payload]);
            state.activeEle = state.contents.length - 1; //新增元素处于激活态
        },
        addImg(state, { payload }: PayloadAction<string>) { // 图片组件会同时设置src拿到上传图片
            console.log('addimg in editing', payload)
            const img = {...defaultElement[Ele.Img], src: payload}
            state.contents.push(img);
            state.activeEle = state.contents.length - 1; //新增元素处于激活态
        },
        selectEle(state, { payload }: PayloadAction<number>) {
            console.log('selectE in editing', payload)
            state.activeEle = payload;
        },
        moveEle(state, {payload}: PayloadAction<MoveElePayload>){
            console.log('moveEle in editing', payload)
            state.contents[payload.index].x = payload.x;
            state.contents[payload.index].y = payload.y;
        },
        changeEleStyle(state, {payload}: PayloadAction<any>) {
            console.log('changeEleStyle in editing', payload)
            const {activeEle} = state;
            state.contents[activeEle!].style = payload;
        },
    },
  });

  export const {setEditingSlide, addEle, addImg, selectEle, changeEleStyle, moveEle} = editingSlide.actions;
  
  export default editingSlide.reducer;

// 定制元素对应默认的样式
  const defaultElement = {
    [Ele.Text] : {type: 'text', style: {}},
    [Ele.Img] : {type: 'img', style: {}},
  }
  