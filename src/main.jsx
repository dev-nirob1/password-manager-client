import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import AddPassword from './components/AddPassword.jsx';
import MyPassword from './components/MyPassword.jsx';
import Home from './layout/Home.jsx';
import ContextProvider from './provider/ContextProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home /></PrivateRoute>

      },
      {
        path: '/add-password',
        element: <PrivateRoute><AddPassword /></PrivateRoute>
      },
      {
        path: '/my-password',
        element: <PrivateRoute><MyPassword /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
