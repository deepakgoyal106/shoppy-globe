// App is the main component of the application
// It contains the common layout shared by all pages

import { Outlet } from "react-router-dom";

// Header is displayed on every page
import Header from "./components/Header";


function App() {


  return (

    <>

      {/* Navigation header */}
      <Header />


      {/* 
        Outlet renders the current route component
        Example:
        Home, Cart, Checkout, ProductDetail
      */}
      <Outlet />


    </>

  );

}


export default App;