// Application entry point
// Connects React with Redux store and Router
// Loads global CSS


import React from "react";

import ReactDOM from "react-dom/client";


import {

  Provider

} from "react-redux";


import {

  RouterProvider

} from "react-router-dom";



import store from "./redux/store";

import router from "./router/router";



import "./styles/app.css";





// Render React application

ReactDOM.createRoot(

  document.getElementById("root")

)

.render(



  <React.StrictMode>


    {/* 
      Provider makes Redux state
      available to all components
    */}

    <Provider store={store}>


      {/* 
        RouterProvider handles
        all application routes
      */}

      <RouterProvider router={router}/>


    </Provider>



  </React.StrictMode>


);