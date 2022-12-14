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
import NotFound from "./components/error/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
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
