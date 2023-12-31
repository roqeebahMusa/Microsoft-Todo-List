import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import AllRoutes from './Components/Routes/AllRoutes.tsx';
import { RouterProvider } from "react-router-dom"
import GlobalStyles from './assets/GlobalStyles.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={AllRoutes} />
  </React.StrictMode>,
)
