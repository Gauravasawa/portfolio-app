import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import ComingSoon from "./Components/ComingSoon/ComingSoon";

const Home = React.lazy(() => import("./Pages/Home"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Project = React.lazy(() => import("./Pages/Project"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Layout = React.lazy(() => import("./utils/Layout/Layout"));
const BlogDeatil = React.lazy(() => import("./Pages/BlogDeatils"));
const ProjectDetail = React.lazy(() => import("./Pages/ProjectDetails"));
const BlogSection = React.lazy(() => import("./Components/blogs/Blogs"));
const PageNotFound = React.lazy(() =>
  import("./Components/PageNotFound/PageNotFound")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<AboutUs />} />

            <Route path="/projects" element={<Project />} />

            {/* Dynamic route for specific Project Details */}
            {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}

            <Route path="/blog" element={<BlogSection />} />
            {/* Dynamic route for specific blog post */}
            <Route path="/blog/:id" element={<BlogDeatil />} />

            {/* Routes for pages that are coming soon */}
            <Route path="/coming-soon" element={<ComingSoon />} />

            {/* Page not found route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
