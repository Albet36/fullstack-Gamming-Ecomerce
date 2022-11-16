import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import { cartReducer } from './cart.slice';

const reducer = {
  cart: cartReducer,
  auth: authSlice
};

const store = configureStore({
  reducer
});

export default store;
