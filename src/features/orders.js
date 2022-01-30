import { createSlice, current } from "@reduxjs/toolkit";
import { ordersDUMMY } from "../data/orders";


export const orderSlice = createSlice({
    name: "orders",
    initialState: {
        allOrders: ordersDUMMY,
        loading: false,
        error: null,
    },
    reducers: {
    }       
    
});
export default orderSlice.reducer;