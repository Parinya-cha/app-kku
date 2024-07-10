import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index'
import { UserAuthContextProvider } from './context/UserAuthContext'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Home />
  }





])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)