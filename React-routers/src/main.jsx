import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import './index.css/'
import Layout from "./components/Layout";
import Github, { getUserInfo } from "./components/Github/Github";
import Users from "./components/Users/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}>
        {" "}
        Home
      </Route>
      <Route path="about" element={<About />}>
        About
      </Route>
      <Route path="contact" element={<Contact />}>
        Contact
      </Route>
      <Route loader={getUserInfo} path="github" element={<Github />}>
        GitHub
      </Route>
      <Route path="user/:userId" element={<Users />}>
        Users
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
