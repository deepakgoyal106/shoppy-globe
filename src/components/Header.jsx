// Header component
// Displays application name and navigation links
// Shows total number of items in cart


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {


  // Get cart items from Redux store
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );


  // Calculate total quantity of products
  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  return (

    <header>


      {/* Application title */}

      <h2>
        ShoppyGlobe
      </h2>



      <nav>


        {/* Navigate to Home page */}

        <Link to="/">
          Home
        </Link>



        {/* Navigate to Cart page and show count */}

        <Link to="/cart">

          Cart ({totalItems})

        </Link>


      </nav>


    </header>

  );

}


export default Header;