// Cart page
// Displays all products added to cart
// Allows user to go to checkout


import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";



function Cart() {



  // Get cart products from Redux store

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );



  // Calculate total cart amount

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );



  return (

    <div className="cart-container">


      {/* Page title */}

      <h2>
        Shopping Cart
      </h2>



      {


        // If cart is empty show message

        cartItems.length === 0 ?


        (

          <h3>
            Cart is empty
          </h3>

        )


        :


        (

          <>


            {/* Render all cart items */}

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




            {/* Cart total section */}

            <div className="cart-total">


              <h3>

                Total:
                ${totalPrice.toFixed(2)}

              </h3>




              {/* Go to checkout page */}

              <Link to="/checkout">


                <button>

                  Checkout

                </button>


              </Link>


            </div>



          </>

        )


      }


    </div>

  );

}


export default Cart;