import AuthLayout from "@/layout/AuthLayout";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
