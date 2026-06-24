// Custom hook for fetching products
// Handles API call, loading state and error handling
// Reusable in any component


import { useEffect, useState } from "react";



function useProducts(){



  // Store product list

  const [products,setProducts] = useState([]);



  // Track loading status

  const [loading,setLoading] = useState(true);



  // Store API errors

  const [error,setError] = useState("");




  useEffect(()=>{



    // Function to fetch products from API

    async function fetchProducts(){



      try {



        const response = await fetch(

          "https://dummyjson.com/products"

        );




        // Check API response

        if(!response.ok){

          throw new Error(
            "Failed to fetch products"
          );

        }




        const data =
        await response.json();




        // Save products in state

        setProducts(
          data.products
        );



      }

      catch(err){



        // Save error message

        setError(
          err.message
        );



      }


      finally{



        // Stop loading after API completes

        setLoading(false);



      }


    }




    fetchProducts();



  },[]);





  // Return data to component

  return {

    products,

    loading,

    error

  };


}



export default useProducts;