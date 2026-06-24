import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./routes/router";
import store from "./redux/store";
import "./styles/app.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <Provider store={store}>

      <Suspense
        fallback={<h2>Loading...</h2>}
      >

        <RouterProvider router={router} />

      </Suspense>

    </Provider>

  </React.StrictMode>

);