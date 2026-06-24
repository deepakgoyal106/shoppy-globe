// Search slice
// Stores search text globally using Redux
// ProductList reads this value to filter products


import { createSlice } from "@reduxjs/toolkit";



const initialState = {


  // Current search value

  searchTerm:""


};




const searchSlice = createSlice({


  name:"search",


  initialState,



  reducers:{



    // Update search text whenever user types

    setSearchTerm:(state,action)=>{


      state.searchTerm =
      action.payload;


    }



  }


});




export const {

  setSearchTerm


} = searchSlice.actions;



export default searchSlice.reducer;