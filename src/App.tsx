import Home from "./styles/pages/home/Home"
import Users from "./styles/pages/users/users";
import Products from "./styles/pages/products/products";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
         <Home/>
      ),
    },
    {
      path: "users",
      element:
       <Users/>
    },
    {
      path: "products",
      element:
       <Products/>
    },
  ]);

  return  <RouterProvider router={router} />;
  
 
}

export default App
