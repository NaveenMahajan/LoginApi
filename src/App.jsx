;
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import LogIn from "./Components/logIn";



function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Register />,

    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,

    },
  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;
