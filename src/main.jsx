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

import blog1 from "./assets/blog1.png";

const blogs = [
  {
    date: "12 Feb 2023",
    title: "How to build",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
  {
    date: "12 Feb 2023",
    title: "How to build a responsive website",
    link: "#",
    image: blog1,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // common layout
    children: [
      { path: "/", element: <App blogs={blogs} /> },
      { path: "/skill", element: <SkillPage /> },
      { path: "/blog", element: <BlogPage blogs={blogs} /> },
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
