import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EditingSlide = {
  index: number;
  contents: EditingEle[];
}

type EditingEle = {
    // 编辑元素： 文本、图片。。。
    type: string;
    // zIndex: number; 在contents数组的顺序，即z-index从小到大的，直接利用后面元素对前面元素的覆盖性来做图层
    style?: React.CSSProperties;
    x?: number;
    y?: number;
}

const initialState: EditingSlide = {
    index: 0,
    contents: [
        {type: 'text'},
        {type: 'img'},
    ],
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
        },
    },
  });

  export const {setEditingSlide, addEle} = editingSlide.actions;
  
  export default editingSlide.reducer;
  