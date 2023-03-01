import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.slice';
import { cartReducer } from './cart.slice';
import productSlice from './product.slice';

const reducer = {
  cart: cartReducer,
  auth: authSlice,
  product:productSlice
};

const store = configureStore({
  reducer
});

export default store;
