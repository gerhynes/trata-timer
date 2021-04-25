import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import "normalize.css";
import "../styles/main.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <Header siteTitle={"Tráta Timer"} />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
