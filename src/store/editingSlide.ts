import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Slide, Ele, EditingEle} from '../constants/slide'

type MoveElePayload = {
    index: number,
    x: number,
    y: number,
}
const initialState: Slide = {
    index: 0,
    activeEle: 0, // 编辑中的元素
    background: '',
    contents: [],  
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
            state.background = payload.background;
        },
        setSlideBackground(state, { payload }: PayloadAction<string>) {
            console.log('setSlideBG in editing', payload)
            state.background = payload;
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
            state.contents[activeEle!].style = {...state.contents[activeEle!].style, ...payload};
        },
        changeSildeStyle(state, {payload}: PayloadAction<any>) {
            console.log('changeStyle in editing', payload)
            // state.style = {...state.style, ...payload};
        },
        changeEle(state, {payload}: PayloadAction<any>) {
            console.log('changeEle in editing', payload)
            const {activeEle} = state;
            state.contents[activeEle!]= {...state.contents[activeEle!], ...payload};
        },
        deleteEle(state) {
            console.log('deleteEle in editing')
            const {activeEle} = state;
            state.contents.splice(activeEle!, 1);
        },
        copyEle(state) {
            console.log('copyEle in editing')
            const {activeEle} = state;
            state.contents.splice(activeEle!, 0, state.contents[activeEle!]);
        },
        eleUp(state) {
            
        },
        changeEleLayer (state, {payload}: PayloadAction<string>) {
            const {activeEle, contents} = state;
            if(activeEle === undefined) return;
            switch (payload){
                case 'down' :
                    console.log(5554, contents)
                    if (activeEle === 0) return;
                    state.activeEle = activeEle - 1; 
                    const aim0 = contents.splice(activeEle, 1);
                    contents.splice(activeEle-1, 0, aim0[0])
                    console.log(5554, contents, aim0, activeEle)
                    state.contents = contents;
                    break;
                case 'up':
                    if (activeEle === contents.length - 1) return;
                    state.activeEle = activeEle + 1; 
                    const aim1 = contents.splice(activeEle, 1);
                    contents.splice(activeEle+1, 0, aim1[0])
                    state.contents = contents;
                    break;
                case 'top': 
                    if (activeEle === contents.length - 1) return;
                    const aim2 = contents.splice(activeEle, 1);
                    contents.push(aim2[0]);
                    state.contents = contents;
                    state.activeEle = contents.length - 1; 
                    break;
                case 'bottom':
                    if (activeEle === 0) return;
                    const aim3 = contents.splice(activeEle, 1);
                    contents.unshift(aim3[0]);
                    state.contents = contents;
                    state.activeEle = 0;
                    break;
            }     
        },
    },
  });

  export const {setEditingSlide, setSlideBackground, addEle, deleteEle, copyEle, addImg, selectEle, changeEleStyle, changeEle, moveEle, changeEleLayer} = editingSlide.actions;
  
  export default editingSlide.reducer;

  const up = (array: EditingEle[], index: number) :EditingEle[]=> {
      const res = array ;
      return res; 
  }
// 定制元素对应默认的样式
  const defaultElement = {
    [Ele.Text] : {type: 'text', style: {display: 'inline-block'}},
    [Ele.Img] : {type: 'img', style: {}},
  }
  