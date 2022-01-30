import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EditingSlide = {
  index: number;
}

const initialState: EditingSlide = {
    index: 0,
}

const editingSlide = createSlice({
    name: 'editingSlide',
    initialState,
    reducers: {
        setEditingSlide(state, { payload }: PayloadAction<number>) {
            state.index = payload;
        },
    },
  });
  
  export default editingSlide.reducer;
  