import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './assets/pages/HomePage.js'
import Navigation from './assets/layout/navigation.js'
import Footer from './assets/layout/footer.js'
import NotFound404 from './assets/components/notfound404.js'
import Main from './assets/layout/main.js'
import About from './assets/pages/About.js'


import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ApartmentPage from './assets/pages/ApartmentPage.js'

const HeaderFooterLayout = () => {
  return (
  <>
      <Navigation/>
      <Main>
          <Outlet/>
      </Main>
      <Footer/>
  </>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement: <NotFound404/>,
    children :[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/apartments",
        element: <ApartmentPage/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
export default HeaderFooterLayout