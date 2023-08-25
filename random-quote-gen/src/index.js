import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// react-redux imports
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { SearchQuotes } from "./components/SearchPage/SearchQuotes";

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
