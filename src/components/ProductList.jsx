import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";


function ProductList({ products }) {


  const searchTerm = useSelector(
    (state) => state.search.searchTerm
  );


  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );


  return (
    <div className="products">

      {
        filteredProducts.map((product) => (

          <ProductItem
            key={product.id}
            product={product}
          />

        ))
      }

    </div>
  );
}


export default ProductList;