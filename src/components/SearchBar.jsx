import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/slices/searchSlice";


function SearchBar(){

  const dispatch = useDispatch();


  return (

    <div className="search-box">

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e)=>
          dispatch(
            setSearchTerm(e.target.value)
          )
        }
      />

    </div>

  );
}


export default SearchBar;