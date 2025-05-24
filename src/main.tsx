import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Profile from './pages/Profile.tsx'
import Home from './pages/Home.tsx'
import Project from './pages/projects/project-list.tsx'
import BlogLayout from './components/common/blog-layout.tsx'
import InstallNginxVps from './pages/blogs/install-nginx-vps/install-nginx-vps.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "projects",
        element: <Project />
      }
    ],
  },
  {
    path: '/blog',
    element: <BlogLayout />,
    children: [
      {
        path: 'install-nginx-vps',
        element: <InstallNginxVps />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
