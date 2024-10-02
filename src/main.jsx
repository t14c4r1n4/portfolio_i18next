import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './assets/sections/about.jsx';
import Home from './assets/sections/home.jsx';
import Contact from './assets/sections/contact.jsx';
import Services from './assets/sections/services.jsx';
import Projects from './assets/sections/projects.jsx';
import ErrorPage from './assets/sections/error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "projects",
        element: <Projects />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
