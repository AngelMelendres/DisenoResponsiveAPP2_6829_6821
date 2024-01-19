import React, { useContext } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main class>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
