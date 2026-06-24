import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";


function CartItem({ item }) {

  const dispatch = useDispatch();


  return (
    <div className="cart-item">

      <img
        className="cart-image"
        loading="lazy"
        src={item.thumbnail}
        alt={item.title}
        />

      <h3>{item.title}</h3>

      <p>
      Price: ${item.price.toFixed(2)}
      </p>

      <div className="quantity-box">

      <button
        className="qty-btn"
        onClick={() =>
          dispatch(decreaseQuantity(item.id))
        }
      >
        −
      </button>


      <span className="quantity">
        {item.quantity}
      </span>


      <button
        className="qty-btn"
        onClick={() =>
          dispatch(increaseQuantity(item.id))
        }
      >
        +
      </button>

      </div>


      <button
        onClick={() =>
          dispatch(removeFromCart(item.id))
        }
      >
        Remove
      </button>


    </div>
  );
}


export default CartItem;