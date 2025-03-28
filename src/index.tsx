import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Portfolio from "./routes/Portfolio";
import Chronicle from "./routes/Chronicle";
import Profiles from "./routes/Profiles";
import ChessPage from "./routes/Chess";
import Minguhongmfg from "./routes/Minguhongmfg";

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
    path: "/chronicle",
    element: <Chronicle />,
  },
  {
    path: "/profiles",
    element: <Profiles />,
  },
  {
    path: "/chess",
    element: <ChessPage />,
  },
  {
    path: "/minguhongmfg",
    element: <Minguhongmfg />,
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
