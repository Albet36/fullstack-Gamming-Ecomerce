import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductApi, getProductByNameApi, listProductApi } from '../pages/api/products/api';
export const listProduct = createAsyncThunk("/listProduct",async() => {
    try {
        const response = await listProductApi();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const getProduct = createAsyncThunk("/getProduct", async ({id}) => {
    try {
      const response = await getProductApi(id);

      return response.data;
    } catch (err) {
      console.log("get api list Product errors");
    }
  });
  export const getProductByName = createAsyncThunk("/getProduct", async ({name}) => {
    try {
      const response = await getProductByNameApi(name);

      return response.data;
    } catch (err) {
      console.log("get api list Product errors");
    }
  });
const productSlice = createSlice({
    name: "product",
    initialState: {
        product : null,
        error : "",
        loading : false,
    },
    extraReducers : {
       /*  [login.pending] : (state, action) => {
            state.loading = true
        },
        [login.fulfilled] : (state, action) => {
            state.loading = false;
            localStorage.setItem("Profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        }, */
        // [login.rejected] : (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.message;
        // },
        [listProduct.pending]: (state, action) => {
            state.loading = true;
          },
          [listProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
          },
          [listProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
      
        // [addProduct.pending] : (state, action) => {
        //     state.loading = true
        // },
        // [addProduct.fulfilled] : (state, action) => {
        //     state.loading = false;
        //     localStorage.setItem("Profile", JSON.stringify({...action.payload}));
        //     state.user = action.payload
        // },
        // [addProduct.rejected] : (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.message;
        // }
    }
});
export default productSlice.reducer;
