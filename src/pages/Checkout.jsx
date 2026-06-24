// Checkout page
// Collects user details
// Shows order summary
// Places order and clears cart


import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../redux/slices/cartSlice";



function Checkout() {


  // Get cart items from Redux

  const cartItems = useSelector(
    (state)=>state.cart.cartItems
  );



  // Used to update Redux state

  const dispatch = useDispatch();



  // Used for redirect after order

  const navigate = useNavigate();




  // Form data state

  const [user,setUser] = useState({

    name:"",
    email:"",
    address:""

  });





  // Calculate total amount

  const totalPrice = cartItems.reduce(

    (total,item)=>

      total + item.price * item.quantity,

    0

  );





  // Handle input changes

  function handleChange(e){


    setUser({

      ...user,

      [e.target.name]:
      e.target.value

    });


  }





  // Place order function

  function placeOrder(){


    alert(
      "Order placed"
    );



    // Empty cart after order

    dispatch(
      clearCart()
    );



    // Redirect to home page

    navigate("/");


  }





  return (

    <div className="checkout-container">


      <h2>
        Checkout
      </h2>




      <div className="checkout-box">



        {/* Customer details form */}

        <div className="checkout-form">


          <h3>
            Customer Details
          </h3>



          <input

            name="name"

            placeholder="Name"

            onChange={handleChange}

          />



          <input

            name="email"

            placeholder="Email"

            onChange={handleChange}

          />



          <input

            name="address"

            placeholder="Address"

            onChange={handleChange}

          />



          <button
            onClick={placeOrder}
          >

            Place Order

          </button>



        </div>





        {/* Order summary */}

        <div className="order-summary">


          <h3>
            Order Summary
          </h3>



          {

            cartItems.map((item)=>(

              <p key={item.id}>

                {item.title}
                ×
                {item.quantity}

              </p>

            ))

          }




          <h3>

            Total:
            ${totalPrice.toFixed(2)}

          </h3>



        </div>



      </div>


    </div>

  );

}


export default Checkout;