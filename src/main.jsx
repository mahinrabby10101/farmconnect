import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import MyProfile from "./pages/Profile/MyProfile";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Services from "./components/Services";



import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "service/:id", element: <PrivateRoute><ServiceDetails /></PrivateRoute> },
      { path: "profile", element: <PrivateRoute><MyProfile /></PrivateRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "/forget-password", element: <ForgetPassword /> },

      { path: "*", element: <NotFound /> }, 
      {
        path: "/services",
        element: <Services />,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
