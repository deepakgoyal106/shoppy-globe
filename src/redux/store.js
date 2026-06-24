import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer 
  }
})