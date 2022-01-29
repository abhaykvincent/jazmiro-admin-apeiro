import { createSlice, current } from "@reduxjs/toolkit";
//array of 10 products with name,id,price,image,description


export const historySlice = createSlice({
    name: "history",
    initialState: {
        page: ['home'],
        sheet: [],
        loading: false,
        error: null,
    },
    reducers: {
        addPageHistory: (state, action) => {
            //if page is not in history
            if (!state.pages.includes(action.payload)) {
                //delete last pages
                state.page[0]=action.payload;
                console.log(current(state))
            } 
        },

        changePageTest:(state, action) => {
            state.page[0]=action.payload;
            let page = action.payload;

            document.querySelector('.sheet').classList.remove('active');
            //document.querySelector('.level-one').classList.remove('active');
            if(document.querySelector('.level-one') != null){
            document.querySelector('.level-one').classList.remove('level-one')
            }
            
            document.querySelector('.page.active').classList.add('hide');
            document.querySelector('.page.active').classList.remove('active');

            
            document.querySelector(`.page.${page}`).classList.add('active');
            document.querySelector(`.page.${page}`).classList.remove('hide');
            document.querySelector('.sheet-cover-black').classList.remove('active');
            
        }
    }
});
export const {addPageHistory,changePageTest } = historySlice.actions;
export default historySlice.reducer;