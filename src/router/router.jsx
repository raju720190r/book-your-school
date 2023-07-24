import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission";
import Home from "../Pages/Home";
import MyCollege from "../Pages/MyCollege";
import PrivateRoute from "./PrivateRoute";
import AllColleges from "../Pages/AllColleges";
import Profile from "../Pages/Profile";
import CollegeDetails from "../Pages/HomeComponent/CollageDetails";
import Login from "../Shared/Login";
import SignUP from "../Shared/SignUP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <AllColleges />,
      },
      {
        path: "/mycolege",
        element: <MyCollege />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signin",
        element: <SignUP />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/colleges/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://book-your-collage-server.vercel.app/colleges/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
