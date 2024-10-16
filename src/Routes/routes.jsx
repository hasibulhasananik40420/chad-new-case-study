import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DriverApp from "../Pages/DriverApp/DriverApp";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [


      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/driver-application",
        element: <DriverApp />,
      }
      

     
    ],
   
  },


 
]);

export default routes;
