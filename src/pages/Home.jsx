import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";


function Home(){

 const {
   products,
   loading,
   error
 } = useProducts();



 if(loading)
 return <h2>Loading...</h2>


 if(error)
 return <h2>{error}</h2>



 return (
  <div>

    <h2>ShoppyGlobe Products</h2>


    <SearchBar />


    <ProductList
      products={products}
    />


  </div>
 );

}


export default Home;