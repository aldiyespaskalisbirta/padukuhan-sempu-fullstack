import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./contex/authContextProvider";
import axios from "axios";

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
