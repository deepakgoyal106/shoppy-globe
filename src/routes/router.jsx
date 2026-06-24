// Router configuration
// Uses React.lazy for code splitting
// Suspense loads components only when required


import { lazy, Suspense } from "react";

import {
  createBrowserRouter
} from "react-router-dom";

import App from "../App";



// Lazy load pages
// Pages are downloaded only when user visits them

const Home = lazy(
  () => import("../pages/Home")
);


const Cart = lazy(
  () => import("../pages/Cart")
);


const Checkout = lazy(
  () => import("../pages/Checkout")
);


const ProductDetail = lazy(
  () => import("../pages/ProductDetail")
);


const NotFound = lazy(
  () => import("../pages/NotFound")
);





// Suspense shows fallback UI
// while component is loading

function Loading(){

  return (
    <h2>
      Loading page...
    </h2>
  );

}





const router = createBrowserRouter([


  {


    path:"/",


    element:<App/>,


    children:[



      {

        index:true,


        element:

        <Suspense fallback={<Loading/>}>

          <Home/>

        </Suspense>


      },



      {

        path:"product/:id",


        element:

        <Suspense fallback={<Loading/>}>

          <ProductDetail/>

        </Suspense>


      },



      {

        path:"cart",


        element:

        <Suspense fallback={<Loading/>}>

          <Cart/>

        </Suspense>


      },



      {

        path:"checkout",


        element:

        <Suspense fallback={<Loading/>}>

          <Checkout/>

        </Suspense>


      },



      {

        path:"*",


        element:

        <Suspense fallback={<Loading/>}>

          <NotFound/>

        </Suspense>


      }



    ]

  }


]);



export default router;