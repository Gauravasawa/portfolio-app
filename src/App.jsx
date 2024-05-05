import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogSection from "./Components/blogs/Blogs";

const Home = React.lazy(() => import("./Pages/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Project = React.lazy(() => import("./Pages/Project"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Layout = React.lazy(() => import("./utils/Layout/Layout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loafing...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<BlogSection />} />
          </Routes>
        </Layout>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
