// Import React hooks
import { useEffect, useState } from "react";

// Import router hooks
import { useParams, useNavigate } from "react-router-dom";

// Import Redux hook
import { useDispatch } from "react-redux";

// Import cart action
import { addToCart } from "../redux/slices/cartSlice";


// Product Detail Component
function ProductDetail() {


  // Get product id from URL
  const { id } = useParams();


  // Used for page navigation
  const navigate = useNavigate();


  // Redux dispatch
  const dispatch = useDispatch();



  // Store product data
  const [product, setProduct] = useState(null);


  // Loading state
  const [loading, setLoading] = useState(true);


  // Error state
  const [error, setError] = useState("");




  // Fetch product details
  useEffect(() => {


    const fetchProduct = async () => {

      try {


        // API call
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );



        if (!response.ok) {
          throw new Error("Product not found");
        }



        const data = await response.json();



        // Save product
        setProduct(data);



      } catch (err) {


        setError(err.message);


      } finally {


        setLoading(false);

      }

    };


    fetchProduct();


  }, [id]);





  // Loading message
  if (loading) {
    return <h2>Loading product...</h2>;
  }




  // Error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }




  return (

    <div className="product-detail">


      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="detail-image"
      />




      <div className="detail-info">


        {/* Product Title */}
        <h1>
          {product.title}
        </h1>



        {/* Description */}
        <p>
          {product.description}
        </p>



        {/* Price */}
        <h2>
          Price: ${product.price}
        </h2>




        <p>
          <strong>Brand:</strong> {product.brand}
        </p>



        <p>
          <strong>Category:</strong> {product.category}
        </p>




        <p>
          <strong>Rating:</strong> ⭐ {product.rating}
        </p>




        {/* Add To Cart */}
        <button
          className="detail-cart-btn"

          onClick={() =>
            dispatch(
              addToCart({
                ...product,
                quantity: 1
              })
            )
          }
        >

          Add To Cart

        </button>
        
        {/* Back Button */}
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >

        ← Back To Product List

      </button>



      </div>



    </div>

  );

}


export default ProductDetail;