import { createSlice } from '@reduxjs/toolkit'
import { StoreProduct } from '../../type';


interface NextState {
  productData:StoreProduct[];
  favoriteData:StoreProduct[];
  allProducts:StoreProduct[];
  userInfo: null | string;

}

const initialState: NextState = {
    productData:[],
    favoriteData:[],
    allProducts:[],
    userInfo: null,

};

export const nextSlice = createSlice ({
    name: "next",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const existingProduct = state.productData.find((item: StoreProduct)=>item._id ===action.payload._id);
        if(existingProduct) {
          existingProduct.quandity +=action.payload.quantity;
      }
      else
      {
        state.productData.push(action.payload);
      }
      },
      addToFavorite: (state, action) => {
        const existingProduct = state.favoriteData.find((item: StoreProduct)=>item._id ===action.payload._id);
      
      if(existingProduct) {
        existingProduct.quandity +=action.payload.quantity;
    }
    else
    {
      state.favoriteData.push(action.payload);
    }
  },
  increaseQuandity: (state, action) => {
    const existingProduct = state.productData.find((item: StoreProduct)=>item._id ===action.payload._id);
    existingProduct && existingProduct.quandity++;
  },
  decreaseQuandity: (state, action) => {
    const existingProduct = state.productData.find((item: StoreProduct)=>item._id ===action.payload._id);
    if(existingProduct?.quandity===1){
      existingProduct.quandity=1
    
    }
    else{
      existingProduct!.quandity--;
    }
    },
    deleteProduct:(state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id!==action.payload
      );
  },
  resetCart:(state)=>{
    state.productData=[];
  },
  resetFavoriteData:(state)=>{
    state.favoriteData=[];
  },
  addUser:(state, action) =>{
    state.userInfo = action.payload
  },
  removeUser:(state) =>{
    state.userInfo=null;
    },
    setAllProducts:(state,action) =>{
      state.allProducts=action.payload;
    }
  }
});

export const { addToCart,addToFavorite,increaseQuandity,decreaseQuandity,deleteProduct,resetCart,addUser,removeUser,setAllProducts,resetFavoriteData } = nextSlice.actions;

export default nextSlice.reducer;