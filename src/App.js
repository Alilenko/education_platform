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
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/education_platform/"
      element={<RootLayout />}
      errorElement={<NotFound />}
    >
      <Route index element={<SchedulePage />} />
      <Route path="user" element={<UserPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="lecture/:id" element={<CoursePage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
