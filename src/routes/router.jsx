import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";

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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [

      {
        index: true,
        element: <Home />,
      },

      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },

      {
        path: "product/:id",
        element: <ProductDetail />,
      },

    ],
  },


  {
    path: "*",
    element: <NotFound />,
  },
]);


export default router;