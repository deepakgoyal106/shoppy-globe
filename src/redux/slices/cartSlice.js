// Cart slice
// Manages all cart related operations
// Add, remove and update product quantity


import { createSlice } from "@reduxjs/toolkit";



const initialState = {


  // Store products added into cart

  cartItems:[]


};





const cartSlice = createSlice({



  name:"cart",



  initialState,



  reducers:{



    // Add product to cart

    addToCart:(state,action)=>{


      const product =
      action.payload;



      const existingProduct =
      state.cartItems.find(

        item =>
        item.id === product.id

      );



      // If product already exists increase quantity

      if(existingProduct){


        existingProduct.quantity += 1;


      }

      else{


        // Add new product with quantity 1

        state.cartItems.push({

          ...product,

          quantity:1

        });


      }


    },





    // Remove product from cart

    removeFromCart:(state,action)=>{


      state.cartItems =
      state.cartItems.filter(

        item =>
        item.id !== action.payload

      );


    },






    // Increase product quantity

    increaseQuantity:(state,action)=>{


      const item =
      state.cartItems.find(

        item =>
        item.id === action.payload

      );



      if(item){

        item.quantity += 1;

      }


    },






    // Decrease quantity
    // Quantity cannot go below 1

    decreaseQuantity:(state,action)=>{


      const item =
      state.cartItems.find(

        item =>
        item.id === action.payload

      );



      if(item && item.quantity > 1){


        item.quantity -= 1;


      }


    },






    // Empty cart after successful order

    clearCart:(state)=>{


      state.cartItems = [];


    }



  }


});




export const {

  addToCart,

  removeFromCart,

  increaseQuantity,

  decreaseQuantity,

  clearCart


} = cartSlice.actions;




export default cartSlice.reducer;