// ProductList component
// Receives products from parent component
// Filters products according to search text
// Renders multiple ProductItem components


import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";


function ProductList({ products }) {



  // Getting search text from Redux store

  const searchTerm = useSelector(
    (state) => state.search.searchTerm
  );



  // Filter products based on user search

  const filteredProducts =
    products.filter((product) =>

      product.title
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )

    );



  return (

    <div className="products">


      {/* 
        Map through products array
        and create reusable ProductItem component
      */}

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