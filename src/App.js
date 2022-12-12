import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import ProductItem1 from "./pages/Home/ProdectItem/ProductItem1";
import ProductItem2 from "./pages/Home/ProdectItem/ProjectItem2";
import ProductItem3 from "./pages/Home/ProdectItem/ProjectItem3";
import Blog from "./pages/Home/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project/1",
          element: <ProductItem1 />,
        },
        {
          path: "/project/2",
          element: <ProductItem2 />,
        },
        {
          path: "/project/3",
          element: <ProductItem3 />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
