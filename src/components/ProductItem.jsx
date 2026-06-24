// ProductItem component
// Displays a single product card
// Handles add to cart action
// Navigates to product details page


import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { addToCart } from "../redux/slices/cartSlice";


function ProductItem({ product }) {


  // Redux dispatch function
  const dispatch = useDispatch();


  // Controls add to cart popup visibility
  const [showMsg, setShowMsg] = useState(false);



  return (

    <div className="product-card">


      {/* Product image */}

      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
      />



      {/* Product name */}

      <h3>
        {product.title}
      </h3>



      {/* Product price */}

      <p>
        ${product.price.toFixed(2)}
      </p>



      {/* Product rating */}

      <div className="rating">

        {"⭐".repeat(
          Math.round(product.rating)
        )}

        <span>
          ({product.rating})
        </span>

      </div>



      {/* Add product to Redux cart */}

      <button

        onClick={()=>{

          dispatch(
            addToCart(product)
          );


          setShowMsg(true);


          setTimeout(()=>{

            setShowMsg(false);

          },1500);

        }}

      >

        Add To Cart

      </button>



      {/* Show success popup */}

      {
        showMsg &&

        <p className="cart-popup">
          Added To Cart ✅
        </p>

      }



      {/* Dynamic product details route */}

      <Link
        to={`/product/${product.id}`}
      >
        <br></br>

        View Details

      </Link>


    </div>

  );

}


export default ProductItem;