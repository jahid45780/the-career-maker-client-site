import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home.jsx/Home";
import Login from "../SignInAndSignUP/Login";
import SignUp from "../SignInAndSignUP/SignUp";
import Error from "../Shared/ErrorPage/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router