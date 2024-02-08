import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider, } from "react-router-dom";
import Contact from './components/contact/Contact.jsx';
import Github,{GithubinfoLoader} from './components/Github/Github.jsx';
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path:"github",
//         element:<GitHub/>
//       }]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path='user/:userid' element={<User/>} />
    <Route loader={GithubinfoLoader} path="github" element={<Github/>} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
