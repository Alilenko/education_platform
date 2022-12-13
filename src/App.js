import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import SchedulePage from "./pages/SchedulePage";
import UserPage from "./pages/UserPage";
import NewsPage from "./pages/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SchedulePage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/courses",
    element: <CoursePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
