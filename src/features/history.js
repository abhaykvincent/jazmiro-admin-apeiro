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

        changePage:(state, action) => {
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
            
        },
        openSheet: (state, action) => {

            //add to history.sheet list
            state.sheet.push(action.payload);
            //DOM class magipulation
            if(state.sheet.length > 1){
                console.log(state.sheet)
                document.querySelector(`.sheet.${state.sheet[0]}`).classList.add('level-one');
                document.querySelector(`.page.active`).classList.add('level-two');
                document.querySelector(`.page.level-one`).classList.remove('level-two');
                document.querySelector('.sheet-cover-black').classList.add('level-up');
              }
            document.querySelector('.sheet-cover-black').classList.add('active');
        
        
            document.querySelector('.page.active').classList.add('level-one');
        
            document.querySelector(`.sheet.${action.payload}`).classList.add('active');
            document.querySelector(`.sheet.${action.payload}`).classList.remove('hide');    
        },
        closeSheet: (state, action) => {
            let sheetHistory = state.sheet;
            console.log(sheetHistory);  

            document.querySelector('.sheet-cover-black').classList.remove('level-up');
            if(sheetHistory.length > 1){
            document.querySelector(`.sheet.${sheetHistory[sheetHistory.length-1]}`).classList.remove('level-one');
            document.querySelector('.sheet-cover-black').classList.remove('level-up');
          } 
            state.sheet=sheetHistory.slice(0, sheetHistory.length - 1);
            document.querySelector(`.sheet.${sheetHistory[sheetHistory.length-1] }`).classList.remove('active');
            // if has class .active in sheet
            if(!document.querySelector(`.sheet`).classList.contains('active')){
            document.querySelector('.sheet-cover-black').classList.remove('active');
            document.querySelector(`.page.active`).classList.remove('level-one');
            }
        }
    }       
    
});
export const {addPageHistory,changePage,openSheet,closeSheet } = historySlice.actions;
export default historySlice.reducer;