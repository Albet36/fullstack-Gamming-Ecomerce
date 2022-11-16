import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from '../pages/api/auth/api';

export const login = createAsyncThunk("auth/login",async({formValue,toast}) => {
    try {
        const response = await signIn(formValue);
        toast.success("Login successfully");
        return response.data;
    } catch (error) {
        console.log(error);
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
    name: "auth",
    initialState: {
        user : null,
        error : "",
        loading : false,
    },
    extraReducers : {
        [login.pending] : (state, action) => {
            state.loading = true
        },
        [login.fulfilled] : (state, action) => {
            state.loading = false;
            localStorage.setItem("Profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [login.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [register.pending] : (state, action) => {
            state.loading = true
        },
        [register.fulfilled] : (state, action) => {
            state.loading = false;
            localStorage.setItem("Profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [register.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});
export default authSlice.reducer;
