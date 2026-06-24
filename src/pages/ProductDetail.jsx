import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetail(){

  const { id } = useParams();


  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");


  useEffect(()=>{

    async function fetchProduct(){

      try{

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


      }catch(err){

        setError(err.message);

      }
      finally{

        setLoading(false);

      }

    }


    fetchProduct();


  },[id]);



  if(loading){
    return <h2>Loading...</h2>
  }


  if(error){
    return <h2>{error}</h2>
  }



  return (

    <div className="product-detail">

      <h1>
        {product.title}
      </h1>


      <img
      className="detail-image"
      loading="lazy"
      src={product.thumbnail}
      alt={product.title}
    />


      <h3>
        Price: ${product.price}
      </h3>

      <div className="rating">

        {"⭐".repeat(
          Math.round(product.rating)
        )}

        <span>
          ({product.rating})
        </span>

      </div>


      <p>
        {product.description}
      </p>


      <p>
        Category:
        {product.category}
      </p>

    </div>

  );

}


export default ProductDetail;