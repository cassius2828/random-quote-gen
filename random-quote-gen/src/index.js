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


//! things to do
/*
1: figure out how to pass state from searchQuotes to Text
2: See if you can add a dynamic route to each card to go to when clicked
3: Add select tab with categories, have them disappear as input e.target.value is updated,
of course, cards displayed will be updated as well
3b: do I need to add another filtered list to be rendered for category? 

4: perhaps I DONT need a new state bc potential issues if I go back to home screen 
extra thoughts: create a new path for clickable element, that path will display the card 
alone with no back or forward buttons, only a home button
- I may want to mutate the original quote state on the click of the element
I understand that is not 'good practice' but I do not see the harm in a small personal
project. But I understand the desire for pure functions on a large scale project

One thing my app lacks is time travel upon random quotes BUT it is a RANDOM QUOTE generator
so honestly that is not a problem, but for other applications I can see how it would be


*/