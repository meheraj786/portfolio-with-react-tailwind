import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './router/Layout.jsx';
import About from './components/about/About.jsx';
import SkillPage from './pages/SkillPage.jsx';
import BlogPage from './pages/BlogPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Services from './components/services/Services.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // common layout
    children: [
      { path: "/", element: <App /> },
      { path: "/skill", element: <SkillPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/projects", element: <ProjectsPage/>},
      { path: "/about", element: <About/>},
      { path: "/services", element: <ServicesPage/>},
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
