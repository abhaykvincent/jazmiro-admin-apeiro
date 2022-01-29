import { createSlice } from "@reduxjs/toolkit";
//array of 10 products with name,id,price,image,description


export const historySlice = createSlice({
    name: "history",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
    }
});
//export const {openSheetT } = historySlice.actions;
export default historySlice.reducer;