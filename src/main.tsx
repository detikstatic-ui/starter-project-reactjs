import React from "react"
import MainLayout from "@/layouts/MainLayout"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "@/styles/globals.css"

import About from "@/pages/About"
import Error from "@/pages/Error"
import Home, { homeAction, homeLoader } from "@/pages/Home"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
          action: homeAction,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
