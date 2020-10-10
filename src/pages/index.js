import React from "react";
import Layout from "../components/layout";
import Timer from "../components/Timer";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Timer />
  </Layout>
);

export default IndexPage;
