import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/project/About.jsx';
import BabaData from './BabaData.jsx';
import Error from './components/project/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children :[
      {
        path: '/about',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <About></About>
    },
    {
      path:'/baba/:aboutId',
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.aboutId}`),
      element: <BabaData></BabaData>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
