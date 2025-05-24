import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";

import Layout from "../Layout";
import { routeChild } from "../../libs/router";

const mainPages = [
  { path: "home", component: lazy(() => import("../../pages/Home")) },
  { path: "profile", component: lazy(() => import("../../pages/Profile")) },
  {
    path: "projects",
    component: lazy(() => import("../../pages/projects/project-list")),
  },
  { path: "blog", component: lazy(() => import("../../pages/blogs/blog-list")) },
];

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      ...routeChild(mainPages),
    ],
  },
];
