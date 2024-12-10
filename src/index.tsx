import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Portfolio from "./routes/Portfolio";
import Annals from "./routes/Annals";
import Profiles from "./routes/Profiles";

import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/annals",
    element: <Annals />,
  },
  {
    path: "/profiles",
    element: <Profiles />,
  },
]);

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
