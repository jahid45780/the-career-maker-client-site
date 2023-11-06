import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home.jsx/Home";
import Login from "../SignInAndSignUP/Login";
import SignUp from "../SignInAndSignUP/SignUp";
import Error from "../Shared/ErrorPage/Error";
import CartDetail from "../Componets/ExtraSection/CartDetail/CartDetail";

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
        },
        {
          path: '/checkout/:id',
          element:<CartDetail></CartDetail>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router