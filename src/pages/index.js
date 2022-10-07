import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from '../components/seo'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pic2.zhimg.com/v2-a2ac9af669bae907c93a016139e3356e_r.jpg?source=1940ef5c"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />

export default IndexPage;
