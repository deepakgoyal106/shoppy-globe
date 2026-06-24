// Redux store configuration
// Combines all application reducers
// Provides global state to React application


import { configureStore } from "@reduxjs/toolkit";


import cartReducer from "./slices/cartSlice";

import searchReducer from "./slices/searchSlice";




// Create Redux store

const store = configureStore({


  reducer:{



    // Cart related state

    cart: cartReducer,



    // Search related state

    search: searchReducer


  }



});





export default store;