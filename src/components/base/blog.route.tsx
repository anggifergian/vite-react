import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import BlogLayout from "../common/blog-layout.tsx";
import ErrorPage from "../ui/error-page.tsx";
import { routeChild } from "../../libs/router.tsx";

const blogPages = [
  {
    path: "install-nginx-vps",
    component: lazy(
      () => import("../../pages/blogs/install-nginx-vps/install-nginx-vps.tsx")
    ),
  },
  {
    path: "docker-web-application",
    component: lazy(
      () => import("../../pages/blogs/docker-web-application/docker-web-application.tsx")
    ),
  },
  {
    path: "ci-cd-github-actions-part-1",
    component: lazy(
      () => import("../../pages/blogs/ci-cd-github-part-1/ci-cd-github-part-1.tsx")
    ),
  },
  {
    path: "ci-cd-github-actions-part-2",
    component: lazy(
      () => import("../../pages/blogs/ci-cd-github-part-2/ci-cd-github-part-2.tsx")
    ),
  },
];

export const blogRoutes: RouteObject[] = [
  {
    path: "/blog",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: routeChild(blogPages),
  },
];
