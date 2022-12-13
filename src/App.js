import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import SchedulePage from "./pages/SchedulePage";
import UserPage from "./pages/UserPage";
import NewsPage from "./pages/NewsPage";
import RootLayout from "./pages/RootLayout";

/*const router = createBrowserRouter([
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
]);*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SchedulePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/courses" element={<CoursePage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
