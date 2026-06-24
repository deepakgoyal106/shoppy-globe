// NotFound page
// Displays error when user visits an invalid route
// Provides link back to Home page


import { Link, useLocation } from "react-router-dom";



function NotFound() {



  // Get current invalid URL

  const location = useLocation();



  return (

    <div className="not-found">



      {/* Error heading */}

      <h1>

        404 - Page Not Found

      </h1>




      {/* Display wrong route */}

      <p>

        The page

        <b>

          {location.pathname}

        </b>

        does not exist.

      </p>




      {/* Go back home */}

      <Link to="/">


        <button>

          Go Home

        </button>


      </Link>



    </div>

  );

}



export default NotFound;