import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import './index.css'
import Home from './screens/Home.tsx'
import ErrorPage from './screens/ErrorPage.tsx'
import AboutUs from './screens/AboutUs.tsx'
import Support from './screens/Support.tsx'

// import react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Register from './screens/Register.tsx'
import Login from './screens/Login.tsx'
import Settings from './screens/Settings.tsx'


//riacao da funcao que contem as paginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Error Page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "support",
        element: <Support />
      },
      {
        path: "my-profile",
        element: <Support />
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
