import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../Pages/loginPage";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*", // أي مسار غير معروف يرجع Login
    element: <Navigate to="/login" replace />,
  },
]);

export default router;