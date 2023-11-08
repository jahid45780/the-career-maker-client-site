import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home.jsx/Home";
import Login from "../SignInAndSignUP/Login";
import SignUp from "../SignInAndSignUP/SignUp";
import Error from "../Shared/ErrorPage/Error";
import CartDetail from "../Componets/ExtraSection/CartDetail/CartDetail";
import Service from "../Pages/Service/Service";
import ServicesDetail from "../Pages/Service/ServicesDetail";
import Schedules from "../Componets/Schedules/Schedules";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
        },
        {
          path:'/services',
          element:<Service></Service>,
        },
        {
          path:'/cart/:id',
          element:<ServicesDetail></ServicesDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.id}`)
          
        },
        {
          path:'schedules',
          element: <PrivateRoute> <Schedules></Schedules> </PrivateRoute>
        }
       
      ]
    },
  ]);

  export default router