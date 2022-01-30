import { createSlice } from "@reduxjs/toolkit";
//array of 10 products with name,id,price,image,description
const fakeProductData=[
    {
        id:1,
        name:"Saree",
        price:10,
        image:"https://picsum.photos/200/300",
        description:"Saree is a long, flowing, silken fabric of soft, fine, fine-woven silk yarn. It is made from a variety of natural fibers, including cotton, linen, and wool. It is usually made from a single piece of yarn, but can be made from many different yarns."
    },
    {
        id:2,
        name:"Kurti",
        price:20,
        image:"https://picsum.photos/200/300",
        description:"Kurti is a long, flowing, silken fabric of soft, fine, fine-woven silk yarn. It is made from a variety of natural fibers, including cotton, linen, and wool. It is usually made from a single piece of yarn, but can be made from many different yarns."
    },
    {
        id:3,
        name:"Churidar",
        price:30,
        image:"https://picsum.photos/200/300",
        description:"Churidar is a long, flowing, silken fabric of soft, fine, fine-woven silk yarn. It is made from a variety of natural fibers, including cotton, linen, and wool. It is usually made from a single piece of yarn, but can be made from many different yarns."
    },
    {
        id:4,
        name:"Salwar",
        price:40,
        image:"https://picsum.photos/200/300",
        description:"Salwar is a long, flowing, silken fabric of soft, fine, fine-woven silk yarn. It is made from a variety of natural fibers, including cotton, linen, and wool. It is usually made from a single piece of yarn, but can be made from many different yarns."
    },
    {
        id:5,
        name:"Ladies Top",
        price:50,
        image:"https://picsum.photos/200/300",
        description:"Ladies Top is a long, flowing, silken fabric of soft, fine, fine-woven silk yarn. It is made from a variety of natural fibers, including cotton, linen, and wool. It is usually made from a single piece of yarn, but can be made from many different yarns."
    },
    {
        id:6,
        name:"Tops",
        price:60,
        image:"https://picsum.photos/200/300",
        description:"Tops is a long, flowing, silken fabric of soft, fine, fine-woven silk yarn. It is made from a variety of natural fibers, including cotton, linen, and wool. It is usually made from a single piece of yarn, but can be made from many different yarns."
    }



]

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: fakeProductData,
        newProduct:{},
        loading: false,
        error: null,
    },
    reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.data = state.data.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const product = state.data.find(product => product.id === action.payload.id);
            Object.assign(product, action.payload);
        }

        //new product
        ,
        addNewProduct: (state, action) => {
            console.log("payload")
            console.log(action.payload);
            debugger
            state.newProduct = action.payload;
        }
        ,
        removeNewProduct: (state, action) => {
            state.newProduct = {};
        }
        ,
        updateNewProduct: (state, action) => {
            state.newProduct = action.payload;
        }
        ,

    }
});
export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
export const { addNewProduct, removeNewProduct, updateNewProduct } = productsSlice.actions;
export default productsSlice.reducer;