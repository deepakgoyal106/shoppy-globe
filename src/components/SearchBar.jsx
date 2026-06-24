// SearchBar component
// Takes user input and updates Redux search state
// ProductList uses this value to filter products


import { useDispatch } from "react-redux";

import { setSearchTerm } from "../redux/slices/searchSlice";



function SearchBar(){



  // Access Redux dispatch

  const dispatch = useDispatch();




  return (


    <div className="search-box">



      {/* 
        Whenever user types,
        update search text in Redux store
      */}

      <input

        type="text"

        placeholder="Search products..."

        onChange={(e)=>{

          dispatch(

            setSearchTerm(
              e.target.value
            )

          );

        }}

      />



    </div>


  );


}


export default SearchBar;