import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/route.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AuthProviders from "./Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProviders>
  </React.StrictMode>
);
