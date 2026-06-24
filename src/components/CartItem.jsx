// CartItem component
// Represents one product inside the cart
// Handles quantity update and remove item actions


import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity

} from "../redux/slices/cartSlice";



function CartItem({ item }) {



  // Redux dispatch function

  const dispatch = useDispatch();




  return (

    <div className="cart-item">



      {/* Product image */}

      <img

        className="cart-image"

        src={item.thumbnail}

        alt={item.title}

      />




      {/* Product information */}

      <div>


        <h3>

          {item.title}

        </h3>



        <p>

          Price:
          ${item.price.toFixed(2)}

        </p>



        {/* Quantity controls */}

        <div className="quantity-box">


          {/* Decrease quantity */}

          <button

            className="qty-btn"

            onClick={()=>{

              dispatch(
                decreaseQuantity(item.id)
              );

            }}

          >

            −

          </button>




          {/* Current quantity */}

          <span className="quantity">

            {item.quantity}

          </span>





          {/* Increase quantity */}

          <button

            className="qty-btn"

            onClick={()=>{

              dispatch(
                increaseQuantity(item.id)
              );

            }}

          >

            +

          </button>



        </div>



        {/* Remove item button */}

        <button

          onClick={()=>{

            dispatch(
              removeFromCart(item.id)
            );

          }}

        >

          Remove

        </button>



      </div>


    </div>

  );

}



export default CartItem;