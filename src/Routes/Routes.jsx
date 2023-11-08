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
import AddService from "../Componets/AddService/AddService";


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
          element: <PrivateRoute><CartDetail></CartDetail></PrivateRoute> ,
          loader: ({params})=> fetch(`https://the-career-maker-server-site.vercel.app/services/${params.id}`)
        },
        {
          path:'/services',
          element:<Service></Service>,
        },
        {
          path:'/cart/:id',
          element:<PrivateRoute><ServicesDetail></ServicesDetail></PrivateRoute>,
          loader: ({params}) => fetch(`https://the-career-maker-server-site.vercel.app/allServices/${params.id}`)
          
        },
        {
          path:'schedules',
          element: <PrivateRoute> <Schedules></Schedules> </PrivateRoute>
        },
        {
          path:'addService',
          element:<AddService></AddService>
        }
       
      ]
    },
  ]);

  export default router