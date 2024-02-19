import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //lodaer:
    children: [
      {
        path: "about",
        element: <About />,
        //loader: teamLoader,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
