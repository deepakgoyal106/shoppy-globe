import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


function Cart() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );


  const totalPrice = cartItems.reduce(
    (total,item) =>
      total + item.price * item.quantity,
    0
  );


  return (

    <div className="cart-container">

      <h2>
        Shopping Cart
      </h2>


      {
        cartItems.length === 0

        ?

        <h3>
          Cart is empty
        </h3>

        :

        <>


        <div className="cart-list">

          {
            cartItems.map((item)=>(

              <CartItem
                key={item.id}
                item={item}
              />

            ))
          }

        </div>


        <div className="cart-total">

          <h3>
           Total: ${totalPrice.toFixed(2)}
          </h3>


          <Link to="/checkout">

            <button>
              Checkout
            </button>

          </Link>


        </div>


        </>

      }


    </div>

  );
}


export default Cart;