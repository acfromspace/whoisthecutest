import React from "react";

import Layout from "../components/layout";

const Puppies = () => (
  <Layout>
    <h2>
      <span role="img" aria-label="Dog Face">
        🐶
      </span>{" "}
      Puppies
    </h2>
    <p>Enjoy the puppies!</p>
    <img
      src="https://res.cloudinary.com/acfromspace/image/upload/c_scale,q_100,w_550/v1/WhoIsTheCutest/doggo.gif"
      alt="doggo"
    />
    <p>Now here are the puppies with rainbows!</p>
    <img
      src="https://res.cloudinary.com/acfromspace/image/upload/c_scale,q_100/v1/WhoIsTheCutest/doggodoggo.gif"
      alt="doggodoggo"
    />
  </Layout>
);

export default Puppies;
