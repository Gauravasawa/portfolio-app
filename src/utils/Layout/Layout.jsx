// Layout.js

import React from "react";
import ScrollToTopButton from "../../Components/floatingButton/FloatingButton";
import Header from "../../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your header component */}
      <Header />

      {/* Main content */}
      <main>{children}</main>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
