import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact.jsx';
import { Error } from './components/Error.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contactus",
    element: <Contact />
  }
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)
