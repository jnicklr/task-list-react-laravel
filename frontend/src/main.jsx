import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Task from './pages/Task.jsx'
import Edit from './pages/Edit.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/task/:id',
        element: <Task/>,
      },
      {
        path: '/task/create',
        element: <Create/>,
      },
      {
        path: '/task/edit/:id',
        element: <Edit/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
