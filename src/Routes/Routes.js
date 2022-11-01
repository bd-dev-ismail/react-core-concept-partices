import { createBrowserRouter } from "react-router-dom";
import Blog from "../blog/Blog";
import Mobile from "../blog/Mobile";
import AddProducts from "../components/AddProducts";
import DisplayProducts from "../components/DisplayProducts";
import EditProduct from "../components/EditProduct";
import Main from "../layout/Main";
import Todos from "../Todos/Todos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/mobile",
        element: <Mobile />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: '/addproducts', element: <AddProducts/>
      },
      {
        path: '/display', element: <DisplayProducts></DisplayProducts>
      },
      {
        path: '/edit', element: <EditProduct/>
      }
    ],
  },
]);