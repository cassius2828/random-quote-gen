import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware } from "redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// react-redux imports
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import {SearchQuotes} from "./components/SearchPage/SearchQuotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "search",
    element: <SearchQuotes />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <applyMiddleware>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </applyMiddleware>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
