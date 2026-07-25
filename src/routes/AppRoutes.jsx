import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import MainPage from "../pages/MainPage";
import WantPage from "../pages/WantPage";
import PlayingPage from "../pages/PlayingPage";
import PlayedPage from "../pages/PlayedPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <MainPage />,
        },
        {
          path: "want-to-play",
          element: <WantPage />,
        },
        {
          path: "playing",
          element: <PlayingPage />,
        },
        {
          path: "played",
          element: <PlayedPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
