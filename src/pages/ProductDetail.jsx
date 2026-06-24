// Product Detail page
// Shows complete information of selected product
// Product id comes from route parameter


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ProductDetail() {


  // Get product id from URL
  // Example: /product/1

  const { id } = useParams();



  // Store selected product data

  const [product, setProduct] = useState(null);



  // Store loading state

  const [loading, setLoading] = useState(true);



  // Store API error

  const [error, setError] = useState("");



  // Fetch product details when id changes

  useEffect(()=>{


    async function fetchProduct(){


      try {


        const response =
        await fetch(
          `https://dummyjson.com/products/${id}`
        );



        if(!response.ok){

          throw new Error(
            "Product not found"
          );

        }



        const data =
        await response.json();



        setProduct(data);


      }


      catch(err){

        setError(
          err.message
        );

      }


      finally{

        setLoading(false);

      }


    }



    fetchProduct();



  },[id]);





  // Loading UI

  if(loading){

    return <h2>Loading...</h2>;

  }



  // Error UI

  if(error){

    return <h2>{error}</h2>;

  }



  return (

    <div className="product-detail">


      {/* Product image */}

      <img

        className="detail-image"

        src={product.thumbnail}

        alt={product.title}

      />



      {/* Product title */}

      <h2>
        {product.title}
      </h2>



      {/* Product price */}

      <h3>

        ${product.price.toFixed(2)}

      </h3>



      {/* Rating */}

      <div className="rating">

        {"⭐".repeat(
          Math.round(product.rating)
        )}

        <span>
          ({product.rating})
        </span>

      </div>



      {/* Product description */}

      <p>
        {product.description}
      </p>


    </div>

  );

}


export default ProductDetail;