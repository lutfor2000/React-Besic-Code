----------Install Proccess---------
->npm install react-router-dom

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [

      {
        path: "/",
        element: <h1>Home</h1>
      },
      {
        path: "/about",
        element: <h1>About</h1>
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
