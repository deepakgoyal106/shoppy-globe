import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { addToCart } from "../redux/slices/cartSlice";


function ProductItem({ product }) {

  const dispatch = useDispatch();
  const [showMsg, setShowMsg] = useState(false);


  return (

    <div className="product-card">


      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
      />


      <h3>
        {product.title}
      </h3>


      <p>
         ${product.price.toFixed(2)}
      </p>
      


      <button
        onClick={() => {

        dispatch(addToCart(product));

        setShowMsg(true);

        setTimeout(() => {
            setShowMsg(false);
        }, 1500);

        }}
        >
        Add To Cart
        </button>
        {
            showMsg &&
            <p className="cart-popup">
                Added To Cart ✅
            </p>
        }

      <br />


      <Link
        to={`/product/${product.id}`}
      >
        View Details
      </Link>


    </div>

  );
}


export default ProductItem;