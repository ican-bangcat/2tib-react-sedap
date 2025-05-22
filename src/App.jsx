// import React, { Suspense, useState } from "react";
// // import { Suspense, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./assets/tailwind.css";
// import Error400 from "./pages/Error400";
// import { Route, Routes } from "react-router-dom";

// const Dashboard = React.lazy(() => import("./pages/Dashboard"));
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import Notfound from "./pages/NotFound";
// import ErrorPage from "./pages/ErrorPage"; // pakai ErrorPage
// import { useParams } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import Loading from "./components/Loading";
import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";

import Loading from "./components/Loading"; // Tetap biasa, karena sering digunakan
import MainLayout from "./layouts/MainLayout"; // Layout biasanya tidak perlu lazy
import AuthLayout from "./layouts/AuthLayout"; // Layout juga tetap biasa

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Notfound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Users = React.lazy(() => import("./pages/Users"));
// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
        </Route>
        {/* Route Error */}
        <Route path="/error/:errorCode" element={<ErrorPageWrapper />} />
        <Route path="*" element={<Notfound />} />

        {/* Route MainLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

const ErrorPageWrapper = () => {
  const { errorCode } = useParams();

  const errorData = {
    400: {
      description: "Bad Request - Permintaan tidak valid.",
      image: "/img/400.png",
      color: "#FF4F03",
    },
    401: {
      description: "Unauthorized - Anda tidak diizinkan.",
      image: "/img/401.png",
      color: "#FFCF06",
    },
    403: {
      description: "Forbidden - Anda dilarang mengakses.",
      image: "/img/403.png",
      color: "#9105C6",
    },
  };

  const data = errorData[errorCode] || {
    description: "Unknown Error",
    image: "/img/default-error.png",
    color: "#000000",
  };

  return (
    <ErrorPage
      errorCode={errorCode}
      errorDescription={data.description}
      errorImage={data.image}
      errorColor={data.color}
    />
  );
};

export default App;
