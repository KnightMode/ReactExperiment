import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { About } from './components/About';
import Body from './components/Body.jsx';
import { Contact } from './components/Contact.jsx';
import { Error } from './components/Error.jsx';
import { RestaurantMenu } from './components/RestaurantMenu.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }],
    errorElement: <Error />
  }
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)
