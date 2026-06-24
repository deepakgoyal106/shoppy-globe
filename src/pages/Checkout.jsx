import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";


function Checkout(){

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const cartItems = useSelector(
    state => state.cart.cartItems
  );


  const [message,setMessage] =
  useState("");



  const [user,setUser] =
  useState({
    name:"",
    email:"",
    address:""
  });



  function handleChange(e){

    setUser({
      ...user,
      [e.target.name]:
      e.target.value
    });

  }



  function placeOrder(){

    setMessage(
      "Order placed"
    );


    dispatch(
      clearCart()
    );


    setTimeout(()=>{

      navigate("/");

    },2000);

  }




  return (

  <div className="checkout-container">

    <h2>
      Checkout
    </h2>


    <div className="checkout-box">


      <div className="checkout-form">

        <h3>
          Customer Details
        </h3>


        <input
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />


        <input
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />


        <input
          name="address"
          placeholder="Enter Address"
          onChange={handleChange}
        />


      </div>



      <div className="order-summary">

        <h3>
          Order Summary
        </h3>


        {
          cartItems.map(item => (

            <p key={item.id}>

              {item.title}

              {" x "}

              {item.quantity}

            </p>

          ))
        }


        <button onClick={placeOrder}>
          Place Order
        </button>


        <h3>
          {message}
        </h3>


      </div>


    </div>


  </div>

);

}


export default Checkout;