import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await response.json();
  return data;
});

export const getCategoryProduct = createAsyncThunk("getcategoryproduct", async (category) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${category}/products`);
  const data = await response.json();
  return data;
});



export const getDetailProduct = createAsyncThunk("getdetailproduct", async (id) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getCategoryProduct.pending, (state, action) => {  // Fixed this line
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
  
});


export default productSlice.reducer