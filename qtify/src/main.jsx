import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './main.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage/HomePage"


const route = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <HomePage /> 
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
