import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux"
import {store} from "./redux/Store"
import {BrowserRouter} from "react-router-dom"
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  {/* <ToastContainer> */}
    <Provider store={store}>
      <App></App>
    </Provider>
    <Toaster></Toaster>
  {/* </ToastContainer> */}
  </BrowserRouter>
);
