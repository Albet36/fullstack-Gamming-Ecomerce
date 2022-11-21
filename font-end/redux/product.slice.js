import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProductApi, getProductApi } from '../pages/api/products/api';

export const addProduct = createAsyncThunk("/product",async({e,toast}) => {
    try {
        const response = await addProductApi(e);
        toast.success("Login successfully");
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const getProduct = createAsyncThunk("/getProduct", async ({id,toast}) => {
    try {
        console.log(id);
      const response = await getProductApi(id);
      toast.success("Login successfully");
      return response.data;
    } catch (err) {
      console.log("get api list Product errors");
    }
  });
export const register = createAsyncThunk("auth/register",async({formValue, navigate, toast}) => {
    try {
        const response = await api.signUp(formValue);
        toast.success("Register successfully");
        navigate("/login");
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
const authSlice = createSlice({
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
        [getProduct.pending]: (state, action) => {
            state.loading = true;
          },
          [getProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
          },
          [getProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
        [addProduct.pending] : (state, action) => {
            state.loading = true
        },
        [addProduct.fulfilled] : (state, action) => {
            state.loading = false;
            localStorage.setItem("Profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [addProduct.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});
export default authSlice.reducer;
