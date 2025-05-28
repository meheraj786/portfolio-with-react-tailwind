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
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import project5 from './assets/project5.png'
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



const projects= [
  {
    img: project1,
    category: "Web Design",
    title: "Petroil-- a landing page",
    description: "petroil is a simple landing page with React and tailwind.",
    link: "https://petroil-ten.vercel.app/"
  },
  {
    img: project2,
    category: "Web Design",
    title: "Muslim Name Generator",
    description: "Over 1000+ Muslim names",
    link: "https://meheraj786.github.io/muslim-name-generator/"
  },
  {
    img: project3,
    category: "Web Design",
    title: "Finsweet",
    description: "static and multi page website",
    link: "https://meheraj786.github.io/finsweet-webpage/"
  },
  {
    img: project4,
    category: "Web Design",
    title: "A Simple Website Design with Figma",
    description: "Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis",
    link: "https://landing-page-website-with-react.vercel.app/"
  },
  {
    img: project5,
    category: "Web Design",
    title: "Authentication with Appwrite",
    description: "Signup and Login with react and appwrite",
    link: "https://authentication-with-react.vercel.app/login"
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // common layout
    children: [
      { path: "/", element: <App projects={projects} blogs={blogs} /> },
      { path: "/skill", element: <SkillPage /> },
      { path: "/blog", element: <BlogPage blogs={blogs} /> },
      { path: "/projects", element: <ProjectsPage projects={projects}/>},
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
