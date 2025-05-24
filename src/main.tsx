import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { blogRoutes } from "./components/base/blog.route";
import { mainRoutes } from "./components/base/main.route";

export const router = createBrowserRouter([...mainRoutes, ...blogRoutes]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
