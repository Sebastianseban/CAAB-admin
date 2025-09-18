import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/reactQuery.js";
import Dashboard from "./pages/DashboardPage.jsx";

import AddDepartmentPage from "./pages/AddDepartmentPage.jsx";
import AddActPage from "./pages/AddActPage.jsx";

import AddQuestionnairePage from "./pages/AddQuestionnairePage.jsx";
import AddBusinessTypePage from "./pages/AddBusinessTypePage.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true, // /login → LoginPage
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-department", element: <AddDepartmentPage /> },
      { path: "add-act", element: <AddActPage /> },
      { path: "add-business-type", element: <AddBusinessTypePage /> },
      { path: "add-questionnaire", element: <AddQuestionnairePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
