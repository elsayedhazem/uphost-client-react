import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { rootLoader } from "./routes/root";
import Error from "./routes/error";
import Destination, { destinationLoader } from "./routes/destination";

import "./index.css";
import "@fontsource/roboto/300.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [],
    // errorElement: <Error />,
  },
  {
    path: "/destinations/:destinationName",
    element: <Destination />,
    loader: destinationLoader,
    // errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
