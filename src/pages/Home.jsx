// Home page
// Fetches product data using custom hook
// Displays search bar and product list


import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";


// Custom hook for fetching products
import useProducts from "../hooks/useProducts";


function Home() {


  // Get products, loading state and error state
  const {
    products,
    loading,
    error
  } = useProducts();



  // Show loading message while API request is running
  if(loading){

    return <h2>Loading products...</h2>;

  }



  // Show error message if API fails
  if(error){

    return <h2>Something went wrong</h2>;

  }



  return (

    <div>


      {/* Page heading */}

      <h2>
        ShoppyGlobe Products
      </h2>



      {/* Search products using Redux state */}

      <SearchBar />



      {/* Display all products */}

      <ProductList
        products={products}
      />


    </div>

  );

}


export default Home;