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

  <img
    className="cart-image"
    src={item.thumbnail}
    alt={item.title}
  />

  <div className="cart-details">

    <h3>{item.title}</h3>

    <p>
      Price: ${item.price}
    </p>

    <div className="quantity-box">

      <button
        className="qty-btn"
        onClick={()=>
          dispatch(
            decreaseQuantity(item.id)
          )
        }
      >
        -
      </button>

      <span>{item.quantity}</span>

      <button
        className="qty-btn"
        onClick={()=>
          dispatch(
            increaseQuantity(item.id)
          )
        }
      >
        +
      </button>

    </div>

    <button class="remove-btn"
      onClick={()=>
        dispatch(
          removeFromCart(item.id)
        )
      }
    >
      Remove
    </button>

  </div>

</div>

  );

}



export default CartItem;