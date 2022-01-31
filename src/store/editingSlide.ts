import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Slide = {
  index: number;// 第n张幻灯片
  contents: EditingEle[];
  activeEle?: number; // 编辑中的幻灯片存在一个编辑中的元素
}

type EditingEle = {
    // 编辑元素： 文本、图片。。。
    type: string;
    // zIndex: number; 在contents数组的顺序，即z-index从小到大的，直接利用后面元素对前面元素的覆盖性来做图层
    style?: React.CSSProperties;
    x?: number;
    y?: number;
}

const initialState: Slide = {
    index: 0,
    contents: [],
    activeEle: 0,
}

const editingSlide = createSlice({
    name: 'editingSlide',
    initialState,
    reducers: {
        setEditingSlide(state, { payload }: PayloadAction<number>) {
            state.index = payload;
        },
        addEle(state, { payload }: PayloadAction<EditingEle>) {
            state.contents.push(payload);
            state.activeEle = state.contents.length-1; //新增元素处于激活态
        },
        selectEle(state, { payload }: PayloadAction<number>) {
            state.activeEle = payload;
        },
        changeEleStyle(state,{payload}: PayloadAction<any>) {
            const { contents, activeEle} = state;
            contents[activeEle!].style = payload;
        }
    },
  });

  export const {setEditingSlide, addEle, selectEle, changeEleStyle} = editingSlide.actions;
  
  export default editingSlide.reducer;
  