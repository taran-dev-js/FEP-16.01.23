import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { Post } from "./routes/Post";
import { Error } from "./routes/Error";
import { loader } from "./routes/loader";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: loader,
    children: [
      {
        path: "post/:postId",
        element: <Post />,
      },
    ],
  },
  {
    path: "help",
    element: <p>Help page</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
